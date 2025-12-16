import { createContext, useContext, useEffect, useState } from "react";
import { refreshTokenRequest } from "./authApi";
import { setAuthStateListener } from "./authState";

interface AuthContextType {
    accessToken: string | null;
    setAccessToken: (token: string | null) => void;
    isLoading: boolean;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const isAuthenticated = !!accessToken;

    // 1) Поддержка apiFetch (даём ему доступ к токену)
    useEffect(() => {
        setAuthStateListener({
            accessToken,
            setAccessToken,
        });
    }, [accessToken]);

    // 2) При загрузке страницы делаем тихий refresh
    useEffect(() => {
        const tryRefresh = async () => {
            try {
                const token = await refreshTokenRequest();
                if (token) setAccessToken(token);
            } catch {
                setAccessToken(null);
            } finally {
                setIsLoading(false);
            }
        };

        tryRefresh();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                setAccessToken,
                isLoading,
                isAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
    return ctx;
}
