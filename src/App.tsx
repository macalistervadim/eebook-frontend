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

export default function App() {
    return (
        <Routes>
            {/* Публичные страницы */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/career" element={<CareersPage />} />

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
