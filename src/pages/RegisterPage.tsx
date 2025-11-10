import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch("http://localhost:8000/api/users/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            alert("Успешно зарегистрирован!");
        } else {
            alert("Ошибка регистрации");
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-80">
                <h1 className="text-xl font-bold mb-4 text-center">Регистрация</h1>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    className="w-full border p-2 rounded mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
}
