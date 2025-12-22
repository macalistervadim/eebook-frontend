let authStateRef: any = null;

export function setAuthStateListener(state: any) {
    authStateRef = state;
}

export function getAuthState() {
    if (!authStateRef) throw new Error("authStateRef not initialized");
    return authStateRef;
}
