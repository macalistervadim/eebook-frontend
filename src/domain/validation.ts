export const validateEmail = (email: string): string => {
    if (!email) return "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Некорректный email адрес";
};

export const validatePassword = (password: string): string => {
    if (!password) return "Пароль обязателен";
    return password.length < 6 ? "Пароль слишком короткий" : "";
};
