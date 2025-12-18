"use client";

import { useState } from "react";
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    User,
    Chrome,
    Apple as AppleIcon,
    Linkedin,
    CheckCircle2,
    XCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/Button.tsx";
import { Checkbox } from "@/components/Checkbox.tsx";
import { LandingHeader } from "@/components/LandingHeader.tsx";
import Footer from "@/components/Footer.tsx";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/Input.tsx";
import { Label } from "@/components/Label.tsx";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
        subscribeNewsletter: false,
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        username: "",
        confirmPassword: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [registerError, setRegisterError] = useState("");

    // Password validation criteria
    const passwordCriteria = [
        { label: "Минимум 8 символов", test: (p: string) => p.length >= 8 },
        { label: "Заглавная буква", test: (p: string) => /[A-Z]/.test(p) },
        { label: "Строчная буква", test: (p: string) => /[a-z]/.test(p) },
        { label: "Цифра", test: (p: string) => /[0-9]/.test(p) },
        { label: "Специальный символ", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
    ];

    const passwordStrength = passwordCriteria.filter((c) =>
        c.test(formData.password)
    ).length;

    const getPasswordStrengthColor = () => {
        if (passwordStrength <= 1) return "bg-red-500";
        if (passwordStrength === 2) return "bg-orange-500";
        if (passwordStrength === 3) return "bg-yellow-500";
        if (passwordStrength === 4) return "bg-lime-500";
        return "bg-emerald-500";
    };

    const getPasswordStrengthLabel = () => {
        if (passwordStrength <= 1) return "Слабый";
        if (passwordStrength === 2) return "Средний";
        if (passwordStrength === 3) return "Хороший";
        if (passwordStrength === 4) return "Сильный";
        return "Очень сильный";
    };

    const validateEmail = (email: string) => {
        if (!email) {
            setErrors((prev) => ({ ...prev, email: "" }));
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors((prev) => ({ ...prev, email: "Некорректный email адрес" }));
        } else {
            setErrors((prev) => ({ ...prev, email: "" }));
        }
    };

    const validateConfirmPassword = (confirmPassword: string) => {
        if (!confirmPassword) {
            setErrors((prev) => ({ ...prev, confirmPassword: "" }));
            return;
        }
        if (confirmPassword !== formData.password) {
            setErrors((prev) => ({ ...prev, confirmPassword: "Пароли не совпадают" }));
        } else {
            setErrors((prev) => ({ ...prev, confirmPassword: "" }));
        }
    };

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));

        if (field === "email" && typeof value === "string") {
            validateEmail(value);
        }
        if (field === "confirmPassword" && typeof value === "string") {
            validateConfirmPassword(value);
        }
    };
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setRegisterError("");
        setErrors({ email: "", password: "", confirmPassword: "", username: "" });

        try {
            const payload = {
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                username: formData.username,
                password: formData.password,
            };

            const response = await fetch("http://localhost:8000/api/v1/users/register/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(payload),
            });

            if (response.status === 201) {
                navigate("/dashboard");
                return;
            }

            let errorData: { code: string; message: string; details?: any } | null = null;
            try {
                errorData = await response.json();
            } catch (jsonError) {
                errorData = null;
            }

            if (response.status === 400 && errorData) {
                setRegisterError(errorData.message || "Ошибка регистрации");

                switch (errorData.code) {
                    case "EMAIL_ALREADY_REGISTERED":
                        setErrors((prev) => ({
                            ...prev,
                            email: "Этот email уже используется",
                        }));
                        break;
                    case "USERNAME_ALREADY_TAKEN":
                        setErrors((prev) => ({
                            ...prev,
                            username: "Это Имя пользователя уже занято",
                        }));
                        break;
                }
                return;
            }

            if (response.status === 422 && errorData?.details) {
                setRegisterError("Проверьте правильность заполнения полей");
                return;
            }

            if (response.status >= 500) {
                setRegisterError(
                    "Внутренняя ошибка сервера. Мы уже работаем над исправлением."
                );
                navigate("/500");
                return;
            }
            if (response.status === 503) {
                navigate("/503");
                return;
            }

            setRegisterError(
                errorData?.message || "Ошибка при регистрации. Попробуйте позже."
            );
        } catch (networkError) {
            setRegisterError("Сетевая ошибка. Проверьте подключение и попробуйте снова.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSocialRegister = (provider: string) => {
        console.log(`Register with ${provider}`);
    };

    const isEmailValid = formData.email && !errors.email;
    const isPasswordValid = formData.password && passwordStrength >= 3;
    const isConfirmPasswordValid = formData.confirmPassword && !errors.confirmPassword;
    const isFNameValid = formData.firstName;
    const isLNameValid = formData.lastName;

    return (
        <section className="bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-100 dark:from-gray-950 dark:via-emerald-950/20 dark:to-gray-900">
            <LandingHeader />

            <div className="max-w-2xl mx-auto px-6 relative z-10 py-40 mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-20"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-emerald-600 dark:text-emerald-400 mb-2">
                            Регистрация
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Создайте аккаунт и начните инвестировать умнее
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-800/50 p-8">
                        {/* Registration Error Alert */}
                        <AnimatePresence>
                            {registerError && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 flex items-start gap-3"
                                >
                                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-red-900 dark:text-red-200 mb-1">
                                            Ошибка регистрации
                                        </div>
                                        <div className="text-red-700 dark:text-red-300">
                                            {registerError}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Social register buttons */}
                        <div className="space-y-3 space-x-4 mb-6 flex justify-between">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-[30%] h-12 rounded-xl border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                                onClick={() => handleSocialRegister("Google")}
                            >
                                <Chrome className="w-5 h-5 mr-2" />
                                Google
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="w-[30%] h-12 rounded-xl border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                                onClick={() => handleSocialRegister("Apple")}
                            >
                                <AppleIcon className="w-5 h-5 mr-2" />
                                Apple
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="w-[30%] h-12 rounded-xl border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                                onClick={() => handleSocialRegister("LinkedIn")}
                            >
                                <Linkedin className="w-5 h-5 mr-2" />
                                LinkedIn
                            </Button>
                        </div>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="px-4 bg-white/80 dark:bg-gray-900/80 text-gray-500 dark:text-gray-400">
                                    или используйте email
                                </span>
                            </div>
                        </div>

                        {/* Registration form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name fields */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label
                                        htmlFor="register-firstName"
                                        className="text-gray-700 dark:text-gray-300 mb-2 block"
                                    >
                                        Имя
                                    </Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            id="register-firstName"
                                            type="text"
                                            placeholder="Иван"
                                            value={formData.firstName}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "firstName",
                                                    e.target.value
                                                )
                                            }
                                            className={`outline-none border w-full pl-11 pr-11 h-12 rounded-xl bg-white dark:bg-gray-800/50 transition-all ${
                                                isFNameValid
                                                    ? "border-emerald-500 dark:border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                                                    : "border-gray-300 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-emerald-500/20"
                                            }`}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label
                                        htmlFor="register-lastName"
                                        className="text-gray-700 dark:text-gray-300 mb-2 block"
                                    >
                                        Фамилия
                                    </Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            id="register-lastName"
                                            type="text"
                                            placeholder="Иванов"
                                            value={formData.lastName}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "lastName",
                                                    e.target.value
                                                )
                                            }
                                            className={`outline-none border w-full pl-11 pr-11 h-12 rounded-xl bg-white dark:bg-gray-800/50 transition-all ${
                                                isLNameValid
                                                    ? "border-emerald-500 dark:border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                                                    : "border-gray-300 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-emerald-500/20"
                                            }`}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Label
                                    htmlFor="register-firstName"
                                    className="text-gray-700 dark:text-gray-300 mb-2 block"
                                >
                                    Имя пользователя
                                </Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="register-username"
                                        type="text"
                                        placeholder="ivanov111"
                                        value={formData.username}
                                        onChange={(e) =>
                                            handleInputChange("username", e.target.value)
                                        }
                                        className="w-full outline-none border pl-11 h-12 rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-emerald-500/20"
                                        required
                                    />
                                </div>
                                <AnimatePresence>
                                    {errors.username && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="text-red-600 dark:text-red-400 mt-2 flex items-center gap-1"
                                        >
                                            <XCircle className="w-4 h-4" />
                                            {errors.username}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                            {/* Email */}
                            <div>
                                <Label
                                    htmlFor="register-email"
                                    className="text-gray-700 dark:text-gray-300 mb-2 block"
                                >
                                    Email
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="register-email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) =>
                                            handleInputChange("email", e.target.value)
                                        }
                                        onBlur={(e) => validateEmail(e.target.value)}
                                        className={`outline-none border w-full pl-11 pr-11 h-12 rounded-xl bg-white dark:bg-gray-800/50 transition-all ${
                                            errors.email
                                                ? "border-red-500 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                                : isEmailValid
                                                  ? "border-emerald-500 dark:border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                                                  : "border-gray-300 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                        required
                                    />
                                    {formData.email && (
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            {errors.email ? (
                                                <XCircle className="w-5 h-5 text-red-500" />
                                            ) : isEmailValid ? (
                                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                            ) : null}
                                        </div>
                                    )}
                                </div>
                                <AnimatePresence>
                                    {errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="text-red-600 dark:text-red-400 mt-2 flex items-center gap-1"
                                        >
                                            <XCircle className="w-4 h-4" />
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Password */}
                            <div>
                                <Label
                                    htmlFor="register-password"
                                    className="text-gray-700 dark:text-gray-300 mb-2 block"
                                >
                                    Пароль
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="register-password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={(e) =>
                                            handleInputChange("password", e.target.value)
                                        }
                                        className={`outline-none w-full border pl-11 pr-11 h-12 rounded-xl bg-white dark:bg-gray-800/50 transition-all ${
                                            formData.password && passwordStrength < 3
                                                ? "border-orange-500 dark:border-orange-500 focus:border-orange-500 focus:ring-orange-500/20"
                                                : isPasswordValid
                                                  ? "border-emerald-500 dark:border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                                                  : "border-gray-300 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>

                                {/* Password strength indicator */}
                                <AnimatePresence>
                                    {formData.password && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-3"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{
                                                            width: `${(passwordStrength / 5) * 100}%`,
                                                        }}
                                                        className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
                                                    />
                                                </div>
                                                <span
                                                    className={`text-${
                                                        passwordStrength <= 1
                                                            ? "red"
                                                            : passwordStrength === 2
                                                              ? "orange"
                                                              : passwordStrength === 3
                                                                ? "yellow"
                                                                : passwordStrength === 4
                                                                  ? "lime"
                                                                  : "emerald"
                                                    }-600 dark:text-${
                                                        passwordStrength <= 1
                                                            ? "red"
                                                            : passwordStrength === 2
                                                              ? "orange"
                                                              : passwordStrength === 3
                                                                ? "yellow"
                                                                : passwordStrength === 4
                                                                  ? "lime"
                                                                  : "emerald"
                                                    }-400`}
                                                >
                                                    {getPasswordStrengthLabel()}
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                {passwordCriteria.map(
                                                    (criteria, index) => {
                                                        const isValid = criteria.test(
                                                            formData.password
                                                        );
                                                        return (
                                                            <div
                                                                key={index}
                                                                className={`flex items-center gap-2 text-${
                                                                    isValid
                                                                        ? "emerald"
                                                                        : "gray"
                                                                }-600 dark:text-${isValid ? "emerald" : "gray"}-400`}
                                                            >
                                                                {isValid ? (
                                                                    <CheckCircle2 className="w-4 h-4" />
                                                                ) : (
                                                                    <div className="w-4 h-4 rounded-full border-2 border-current" />
                                                                )}
                                                                <span>
                                                                    {criteria.label}
                                                                </span>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <Label
                                    htmlFor="register-confirmPassword"
                                    className="text-gray-700 dark:text-gray-300 mb-2 block"
                                >
                                    Подтвердите пароль
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="register-confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={formData.confirmPassword}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "confirmPassword",
                                                e.target.value
                                            )
                                        }
                                        onBlur={(e) =>
                                            validateConfirmPassword(e.target.value)
                                        }
                                        className={`outline-none w-full border pl-11 pr-11 h-12 rounded-xl bg-white dark:bg-gray-800/50 transition-all ${
                                            errors.confirmPassword
                                                ? "border-red-500 dark:border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                                : isConfirmPasswordValid
                                                  ? "border-emerald-500 dark:border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                                                  : "border-gray-300 dark:border-gray-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-emerald-500/20"
                                        }`}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(!showConfirmPassword)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {errors.confirmPassword && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="text-red-600 dark:text-red-400 mt-2 flex items-center gap-1"
                                        >
                                            <XCircle className="w-4 h-4" />
                                            {errors.confirmPassword}
                                        </motion.p>
                                    )}
                                    {isConfirmPasswordValid && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="text-emerald-600 dark:text-emerald-400 mt-2 flex items-center gap-1"
                                        >
                                            <CheckCircle2 className="w-4 h-4" />
                                            Пароли совпадают
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Checkboxes */}
                            <div className="space-y-3">
                                <div className="flex items-baseline space-x-2">
                                    <Checkbox
                                        id="register-terms"
                                        checked={formData.agreeToTerms}
                                        onCheckedChange={(checked) =>
                                            handleInputChange(
                                                "agreeToTerms",
                                                checked as boolean
                                            )
                                        }
                                    />
                                    <Label
                                        htmlFor="register-terms"
                                        className="text-gray-600  dark:text-gray-400 cursor-pointer select-none"
                                    >
                                        Я согласен с{" "}
                                        <a
                                            href="#"
                                            className="text-emerald-600 dark:text-emerald-400 hover:underline"
                                        >
                                            условиями использования
                                        </a>{" "}
                                        и{" "}
                                        <a
                                            href="#"
                                            className="text-emerald-600 dark:text-emerald-400 hover:underline"
                                        >
                                            политикой конфиденциальности
                                        </a>
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="register-newsletter"
                                        checked={formData.subscribeNewsletter}
                                        onCheckedChange={(checked) =>
                                            handleInputChange(
                                                "subscribeNewsletter",
                                                checked as boolean
                                            )
                                        }
                                    />
                                    <Label
                                        htmlFor="register-newsletter"
                                        className="text-gray-600 dark:text-gray-400 cursor-pointer select-none"
                                    >
                                        Получать новости и обновления на email
                                    </Label>
                                </div>
                            </div>

                            {/* Submit button */}
                            <Button
                                type="submit"
                                disabled={
                                    isSubmitting ||
                                    !!errors.email ||
                                    !!errors.confirmPassword ||
                                    !formData.email ||
                                    !formData.password ||
                                    !formData.confirmPassword ||
                                    !formData.agreeToTerms ||
                                    passwordStrength < 3
                                }
                                className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white rounded-xl shadow-lg shadow-emerald-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Регистрация...
                                    </div>
                                ) : (
                                    "Создать аккаунт"
                                )}
                            </Button>
                        </form>

                        {/* Sign in link */}
                        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
                            Уже есть аккаунт?{" "}
                            <Link
                                to="/login"
                                className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                            >
                                Войти
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </section>
    );
}
