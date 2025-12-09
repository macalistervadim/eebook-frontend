import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
