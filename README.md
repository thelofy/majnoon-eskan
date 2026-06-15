<div align="center">

# ✦ Eskan Stone · اسکان سنگ ✦

**Luxury Architectural Stone Portfolio · پورتفولیوی لوکس سنگ معماری**

[![Astro](https://img.shields.io/badge/Astro-4.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Static Site](https://img.shields.io/badge/Output-Static%20HTML-8A8379?style=for-the-badge)](#)

*A premium bilingual marketing & portfolio experience — crafted for architectural stone excellence.*

---

</div>

<br>

---

## 🇮🇷 فارسی · Persian

<div dir="rtl" align="right">

### ✦ معرفی پروژه

**اسکان سنگ (Eskan Stone)** یک وب‌سایت پورتفولیو و بازاریابی لوکس برای نمایش آثار سنگ‌کاری معماری است — با طراحی تاریک، ظرافت بصری editorial و تجربه‌ای دوزبانه برای مخاطبان داخلی و بین‌المللی.

این پروژه با **Astro 4**، **Tailwind CSS 3**، **TypeScript** و **Astro Content Collections** (محتوای Markdown) ساخته شده است. شامل **۲۱ فایل مسیر** است که **۵۱ صفحه استاتیک** بهینه‌شده تولید می‌کند — همراه با تم تاریک اختصاصی luxury و سیستم طراحی یکپارچه.

<br>

### ✦ ویژگی‌های کلیدی

| ویژگی | جزئیات |
|:------|:-------|
| **مسیریابی دوزبانه** | فارسی (`fa`) به‌عنوان زبان پیش‌فرض + انگلیسی (`en`) — با ریدایرکت ریشه به `/fa/` |
| **پروژه‌ها (۳ مورد)** | ویلا میبد · ویلا ملاصدرا · شوروم پرده‌باف |
| **آثار ویژه (۳ مورد)** | فواره زین · استخر سنتی · حمام ترکی امارات |
| **وبلاگ (۱۲ مقاله)** | ۳۶ فایل Markdown در مجموع (fa + en) در Content Collections |
| **رابط کاربری** | توکن‌های طراحی اختصاصی · پشتیبانی RTL · متاتگ‌های SEO کامل |

<br>

### ✦ راه‌اندازی محلی

> **پیش‌نیاز:** [Node.js](https://nodejs.org) نسخه **۱۸ یا بالاتر**

#### ۱ · نصب وابستگی‌ها

```bash
npm install
```

#### ۲ · اجرای محیط توسعه

```bash
npm run dev
```

سایت در آدرس **[http://localhost:4321](http://localhost:4321)** در دسترس خواهد بود.

#### ۳ · ساخت نسخه Production

```bash
npm run build
```

خروجی: فایل‌های HTML استاتیک بهینه‌شده در پوشه **`dist/`**

#### ۴ · پیش‌نمایش Build

```bash
npm run preview
```

<br>

### ✦ ساختار پوشه‌ها

```
sang/
├── src/
│   ├── pages/          ← مسیرها و صفحات (fa/ · en/)
│   ├── content/        ← محتوای Markdown (پروژه‌ها · آثار ویژه · وبلاگ)
│   ├── components/     ← کامپوننت‌های UI (Navbar · Hero · Cards · …)
│   └── i18n/           ← دیکشنری‌های ترجمه فارسی و انگلیسی
├── public/
│   └── assets/         ← تصاویر · لوگو · فایل‌های استاتیک
├── astro.config.mjs    ← پیکربندی Astro
├── tailwind.config.mjs ← توکن‌های طراحی Tailwind
└── package.json
```

<br>

### ✦ استقرار (Deployment)

| فایل | کاربرد |
|:-----|:-------|
| `public/_redirects` | پیکربندی **Netlify** — ریدایرکت `/` به `/fa/` |
| `nginx.conf.example` | نمونه پیکربندی **Nginx** برای سرور VPS / self-hosted |

پس از `npm run build`، محتوای پوشه **`dist/`** را روی هاست استاتیک خود بارگذاری کنید.

</div>

<br>

---

<br>

## 🇬🇧 English

<div align="left">

### ✦ Project Introduction

**Eskan Stone** is a luxury marketing and portfolio website showcasing architectural stonework — designed with a dark editorial aesthetic, refined typography, and a seamless bilingual experience for domestic and international audiences.

Built with **Astro 4**, **Tailwind CSS 3**, **TypeScript**, and **Astro Content Collections** (Markdown-driven content). The site comprises **21 route files** generating **51 optimized static pages**, wrapped in a custom dark luxury theme and a cohesive design system.

<br>

### ✦ Key Features

| Feature | Details |
|:--------|:--------|
| **Bilingual Routing** | Persian (`fa`) as default + English (`en`) — root redirect to `/fa/` |
| **Projects (3)** | Villa Meybod · Villa Mollasadra · Pardebaf Showroom |
| **Special Works (3)** | Zein Fountain · Traditional Pool · Turkish Bath UAE |
| **Blog (12 posts)** | 36 Markdown files total (fa + en) across Content Collections |
| **UI & SEO** | Custom design tokens · RTL support · Complete SEO meta tags |

<br>

### ✦ Local Setup & Getting Started

> **Prerequisites:** [Node.js](https://nodejs.org) version **18 or higher**

#### 1 · Install Dependencies

```bash
npm install
```

#### 2 · Start Development Server

```bash
npm run dev
```

The site will be available at **[http://localhost:4321](http://localhost:4321)**.

#### 3 · Production Build

```bash
npm run build
```

Output: optimized static HTML files in the **`dist/`** directory.

#### 4 · Preview Production Build

```bash
npm run preview
```

<br>

### ✦ Folder Structure

```
sang/
├── src/
│   ├── pages/          ← Routes & page templates (fa/ · en/)
│   ├── content/        ← Markdown content (projects · special works · blog)
│   ├── components/     ← UI components (Navbar · Hero · Cards · …)
│   └── i18n/           ← Persian & English translation dictionaries
├── public/
│   └── assets/         ← Images · logo · static files
├── astro.config.mjs    ← Astro configuration
├── tailwind.config.mjs ← Tailwind design tokens
└── package.json
```

<br>

### ✦ Deployment Notes

| File | Purpose |
|:-----|:--------|
| `public/_redirects` | **Netlify** configuration — redirects `/` to `/fa/` |
| `nginx.conf.example` | Sample **Nginx** config for VPS / self-hosted servers |

After running `npm run build`, deploy the contents of the **`dist/`** folder to your static hosting provider.

</div>

<br>

---

<div align="center">

**Eskan Stone · اسکان سنگ**

*Crafted with precision. Built for permanence.*

</div>
