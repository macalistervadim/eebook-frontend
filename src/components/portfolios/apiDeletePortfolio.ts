import { apiFetch } from "@/api/apiFetch.ts";

export async function apiDeletePortfolio(id: string) {
    const response = await apiFetch("http://localhost:8080/api/v1/portfolio/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return;
}
