import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import type { JSX } from "react";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) return null;

    return isAuthenticated ? children : <Navigate to="/login" />;
}
