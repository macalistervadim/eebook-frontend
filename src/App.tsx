import { Routes, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage.tsx";
import Login from "./containers/LoginPage.tsx";
import Register from "./containers/RegisterPage.tsx";

import {
    Error401,
    Error404,
    Error500,
    Error402,
    Error403,
    Error503,
} from "@/containers/ErrorPage.tsx";

import JobDetailPage from "@/containers/JobDetailPage.tsx";
import AboutPage from "@/containers/AboutPage.tsx";
import CareersPage from "@/containers/CareersPage.tsx";
import PortfolioDashboard from "@/containers/PortfolioDashboard.tsx";
import ProtectedRoute from "@/utils/auth/ProtectedRoute.tsx";
import LogoutPage from "@/containers/LogoutPage.tsx";
import DocumentationPage from "@/containers/DocumentationPage.tsx";
import LegalPage from "@/containers/LegalPage.tsx";
import PortfoliosPage from "@/containers/PortfoliosPage.tsx";
import SupportPage from "@/containers/SupportPage.tsx";
import UpdatesPage from "@/containers/UpdatesPage.tsx";
import PasswordResetPage from "@/containers/PasswordResetPage.tsx";
import ChangePasswordPage from "@/containers/ChangePassword.tsx";
import CreatePortfolioPage from "@/containers/CreatePortfolioPage.tsx";
import ProfilePage from "@/containers/ProfilePage.tsx";

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
                path="/password-change"
                element={
                    <ProtectedRoute>
                        <ChangePasswordPage />
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
            <Route
                path="/create-portfolio"
                element={
                    <ProtectedRoute>
                        <CreatePortfolioPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <ProfilePage />
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
