import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

import {
    Error401,
    Error404,
    Error500,
    Error402,
    Error403,
    Error503,
} from "@/components/ErrorPage";

import JobDetailPage from "@/components/JobDetailPage";
import AboutPage from "@/pages/AboutPage.tsx";
import CareersPage from "@/pages/CareersPage.tsx";
import PortfolioDashboard from "@/components/PortfolioDashboard.tsx";
import ProtectedRoute from "@/auth/ProtectedRoute.tsx";
import LogoutPage from "@/pages/LogoutPage.tsx";
import DocumentationPage from "@/pages/DocumentationPage.tsx";
import LegalPage from "@/pages/LegalPage.tsx";
import PortfoliosPage from "@/pages/PortfoliosPage.tsx";
import SupportPage from "@/pages/SupportPage.tsx";
import UpdatesPage from "@/pages/UpdatesPage.tsx";
import PasswordResetPage from "@/pages/PasswordResetPage.tsx";
import ChangePasswordPage from "@/pages/ChangePassword.tsx";

export default function App() {
    return (
        <Routes>
            {/* Публичные страницы */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/career" element={<CareersPage />} />
            <Route path="/docs" element={<DocumentationPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/updates" element={<UpdatesPage />} />
            <Route path="/password-reset" element={<PasswordResetPage />} />
            <Route path="/password-change" element={<ChangePasswordPage />} />

            {/* Защищенные страницы */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <PortfolioDashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/portfolio"
                element={
                    <ProtectedRoute>
                        <PortfoliosPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/logout"
                element={
                    <ProtectedRoute>
                        <LogoutPage />
                    </ProtectedRoute>
                }
            />

            {/* Динамический роут для вакансии */}
            <Route path="/jobs/:id" element={<JobDetailPage />} />

            {/* Страницы ошибок */}
            <Route path="/401" element={<Error401 />} />
            <Route path="/402" element={<Error402 />} />
            <Route path="/403" element={<Error403 />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/500" element={<Error500 />} />
            <Route path="/503" element={<Error503 />} />

            {/* Любой неизвестный путь */}
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}
