import { getAuthState } from "./authState";
import { refreshTokenRequest } from "./authApi";

let refreshing: Promise<string | null> | null = null;

async function getNewToken() {
    if (!refreshing) {
        refreshing = refreshTokenRequest().finally(() => {
            refreshing = null;
        });
    }
    return refreshing;
}

export async function apiFetch(input: RequestInfo, init: RequestInit = {}) {
    let { accessToken, setAccessToken } = getAuthState();
    const headers = new Headers(init.headers || {});
    if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);

    let response = await fetch(input, { ...init, headers, credentials: "include" });

    if (response.status === 401) {
        const newToken = await getNewToken();
        if (!newToken) return response;
        setAccessToken(newToken);
        headers.set("Authorization", `Bearer ${newToken}`);
        response = await fetch(input, { ...init, headers, credentials: "include" });
    }
    return response;
}
