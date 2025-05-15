# Commatix

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Nuxt](https://img.shields.io/badge/built%20with-nuxt-green)
![Laravel](https://img.shields.io/badge/backend-laravel-red)
![RabbitMQ](https://img.shields.io/badge/queue-rabbitmq-orange)
![Redis](https://img.shields.io/badge/cache-redis-critical)

> **Commatix** is a multi-tenant communication and workflow automation platform for managing subscribers and sending bulk Email, SMS, WhatsApp, and voice calls. Built with Nuxt, Laravel, RabbitMQ, and Redis, it helps businesses streamline messaging and scale workflows.

---

## 🚀 Features

- ✉️ Bulk Email, SMS, WhatsApp, and Automated Calls
- 🏢 Multi-Tenant Architecture with Custom SMTP per Tenant
- ⚙️ Custom Workflow Templates
- 📊 Real-Time Communication Logs and Dashboards
- ⏱️ Job Queuing with RabbitMQ
- 🔐 Secure Auth and Role-Based Access Control
- 🧩 Modular and Extendable Frontend (Nuxt + Tailwind + Pinia)

---

## 🛠️ Tech Stack

- **Frontend**: Nuxt 3, Nuxt UI, Tailwind CSS, Pinia
- **Backend**: Laravel 11, MySQL / SQLite, Redis, RabbitMQ
- **Messaging APIs**: 3CX, Meta WhatsApp Cloud, Custom SMS Gateway

---

## 📦 Installation (coming soon)

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
composer install
php artisan migrate