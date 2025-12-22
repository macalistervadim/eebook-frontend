import { useNavigate } from "react-router-dom";
import { useAuth } from "@/utils/auth/AuthProvider.tsx";
import { logoutRequest } from "@/api/authApi.ts";

export function useLogout() {
    const { setAccessToken } = useAuth();

    const logout = async () => {
        const success = await logoutRequest();
        if (success) {
            // чистим токен из контекста
            setAccessToken(null);
        }
    };

    return logout;
}
