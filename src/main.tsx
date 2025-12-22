import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@/utils/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "@/utils/ScrollToTop.tsx";
import { AuthProvider } from "@/utils/auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <AuthProvider>
                    <ScrollToTop />
                    <App />
                </AuthProvider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
