export type ApiError = {
    code: string;
    message?: string;
    details?: any;
};

export type ApiResult<T> = { ok: true; data: T } | { ok: false; error: ApiError };

export async function loginRequest(
    email: string,
    password: string
): Promise<ApiResult<{ access_token: string }>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10_000); // 10 секунд

    try {
        const res = await fetch("http://localhost:8000/api/v1/users/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ email, password }),
            signal: controller.signal,
        });

        let body: any = null;
        try {
            body = await res.json();
        } catch {
            // сервер вернул не-json
        }

        if (!res.ok) {
            return {
                ok: false,
                error: {
                    code: body?.code ?? "SERVER_ERROR",
                    message: body?.message ?? "Ошибка сервера",
                    details: body?.details,
                },
            };
        }

        return {
            ok: true,
            data: body,
        };
    } catch (err: any) {
        if (err.name === "AbortError") {
            return {
                ok: false,
                error: {
                    code: "REQUEST_TIMEOUT",
                    message: "Превышено время ожидания сервера",
                },
            };
        }

        return {
            ok: false,
            error: {
                code: "NETWORK_ERROR",
                message: "Сервер недоступен",
            },
        };
    } finally {
        clearTimeout(timeoutId);
    }
}

export async function logoutRequest() {
    const res = await fetch("http://localhost:8000/api/v1/users/logout/", {
        method: "POST",
        credentials: "include",
    });

    if (!res.ok) {
        console.error("Logout failed");
        return false;
    }
    return true;
}

export async function refreshTokenRequest(): Promise<string | null> {
    const res = await fetch("http://localhost:8000/api/v1/users/refresh/", {
        method: "POST",
        credentials: "include",
    });

    if (!res.ok) return null;

    if (res.status === 204) return null;

    const text = await res.text();
    if (!text) return null;

    const data = JSON.parse(text);
    return typeof data.access_token === "string" ? data.access_token : null;
}
