# 📘 eebook — Investment Assistant

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-FF6B6B?style=for-the-badge)](https://recharts.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![CI](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

---

## ✨ Project overview

**eebook — Investment Assistant** is a modern web application aimed at individual and institutional investors.  
It helps to track portfolios across instruments (stocks, bonds, FX, crypto), analyze performance, plan and monitor upcoming payouts (dividends, coupons, maturities), and manage users/admin tasks — all with security and operational readiness in mind.

Key capabilities:
- Portfolio & asset management (stocks, bonds, fiat, crypto)
- Rich analytics (returns, volatility, index comparisons)
- Payout calendar (dividends, coupons, maturities)
- Security hardening (data encryption, XSS/CSRF protection, SQL injection mitigation)
- Admin features (user/ticket moderation, roles)
- Production-ready infra (Docker, CI/CD, monitoring, scaling)

> This repository contains the **frontend** for eebook — UI components, charts, ROI calculator and pages that connect to the backend API (FastAPI).

---

## 🧩 Features (frontend)

- Interactive portfolio dashboard with charts (Recharts)
- ROI / benefit calculator with sliders and instant preview
- Payout calendar visualizations
- Responsive UI built with Tailwind CSS
- Accessible components and motion polish (Framer Motion compatible)
- Configurable for connecting to backend API (auth + data endpoints)

---

## 🛠️ Tech stack

- Frontend: **React + TypeScript**
- Styling: **Tailwind CSS**
- Charts: **Recharts**
- Animations: **Framer Motion** (optional)
- Backend (recommended): **FastAPI** (separate repo/service)
- DB (recommended): **PostgreSQL**
- Containerization & infra: **Docker**, **GitHub Actions** (CI/CD)
