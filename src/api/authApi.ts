export async function loginRequest(email: string, password: string) {
    const res = await fetch("http://localhost:8000/api/v1/users/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.access_token;
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

    const data = await res.json();
    return data.access_token;
}
