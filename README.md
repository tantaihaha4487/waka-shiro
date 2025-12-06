
# Waka-Shiro 🎏

[English](#english) | [ภาษาไทย](#thai)

---

<a name="english"></a>
## 🇬🇧 English Description

**Waka-Shiro** is a premium e-commerce MVP designed for an artisanal Taiyaki and Wagashi shop. It showcases a modern, "Warm Glass" aesthetic that combines the traditional warmth of Japanese confectionery with cutting-edge web design trends.

### Key Features
- **🎨 Modern Aesthetics**: Features a custom "Warm Glass" design system using Glassmorphism effects, warm color palettes (Brown/Cream), and smooth Framer Motion animations.
- **🌍 Internationalization (i18n)**: Full support for English (`/en`) and Thai (`/th`) languages, with middleware-based routing and dictionary management.
- **🛒 E-commerce Functionality**: Complete flow including Product Browsing, Category Filtering, Shopping Cart management, and a Mock Checkout process.
- **👤 User Roles**: Supports Guest, Registered User, and Admin roles.
  - **Admin Dashboard**: Visual analytics for revenue/orders and product management interface.
- **📱 Responsive**: Fully responsive design optimized for mobile, tablet, and desktop.

### Tech Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: React Context API (Auth & Cart)

### Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   # or
   bun install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   # or
   bun dev
   ```

3. **Open Browser**:
   Navigate to `http://localhost:3000`. The app will automatically redirect to `/en` or `/th` based on your locale.

---

<a name="thai"></a>
## 🇹🇭 คำอธิบายภาษาไทย

**Waka-Shiro (วากะ-ชิโร่)** คือต้นแบบเว็บไซต์อีคอมเมิร์ซระดับพรีเมียมสำหรับร้านขายขนมไทยากิและวากาชิ โดดเด่นด้วยดีไซน์ที่ผสมผสานความอบอุ่นของขนมญี่ปุ่นเข้ากับเทรนด์การออกแบบเว็บไซต์สมัยใหม่แบบ "Warm Glass"

### ฟีเจอร์หลัก
- **🎨 ดีไซน์ทันสมัย**: ใช้ระบบการออกแบบ "Warm Glass" ที่เน้นความโปร่งใสแบบกระจก (Glassmorphism) โทนสีอบอุ่น (น้ำตาล/ครีม) และอนิเมชั่นที่ลื่นไหลด้วย Framer Motion
- **🌍 รองรับหลายภาษา (i18n)**: รองรับทั้งภาษาอังกฤษ (`/en`) และภาษาไทย (`/th`) อย่างสมบูรณ์ พร้อมระบบจัดการเส้นทางอัตโนมัติ
- **🛒 ระบบซื้อขาย**: ครอบคลุมตั้งแต่การเลือกชมสินค้า การกรองหมวดหมู่ ตะกร้าสินค้า และระบบจำลองการชำระเงิน
- **👤 ระบบผู้ใช้งาน**: รองรับทั้งผู้เยี่ยมชม (Guest), สมาชิก (User) และผู้ดูแลระบบ (Admin)
  - **แดชบอร์ดผู้ดูแลระบบ**: แสดงกราฟยอดขายและคำสั่งซื้อ พร้อมหน้าจัดการเพิ่มสินค้า
- **📱 รองรับทุกหน้าจอ**: แสดงผลได้อย่างสวยงามทั้งบนมือถือ แท็บเล็ต และคอมพิวเตอร์

### เทคโนโลยีที่ใช้
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Animations**: Framer Motion
- **State Management**: React Context API

---

## 📂 Routing Tree / Project Structure

The project follows the Next.js App Router structure with dynamic localization.

```
waka-shiro/
├── app/
│   ├── [lang]/                     # Dynamic Locale Route (en/th)
│   │   ├── about/                  # About Us Page
│   │   │   ├── AboutClient.tsx     # About page with Team section
│   │   │   └── page.tsx
│   │   ├── admin/                  # Admin Protected Routes
│   │   │   ├── add-product/        # Add New Product Form
│   │   │   │   ├── AddProductClient.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── dashboard/          # Admin Analytics Dashboard
│   │   │   │   ├── DashboardClient.tsx
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx            # Redirects to /dashboard
│   │   ├── cart/                   # Shopping Cart Page
│   │   │   ├── CartClient.tsx
│   │   │   └── page.tsx
│   │   ├── checkout/               # Checkout & Payment Page
│   │   │   ├── CheckoutClient.tsx
│   │   │   └── page.tsx
│   │   ├── login/                  # Authentication Page
│   │   │   ├── LoginClient.tsx
│   │   │   └── page.tsx
│   │   ├── profile/                # User Profile & Order History
│   │   │   ├── ProfileClient.tsx
│   │   │   └── page.tsx
│   │   ├── shop/                   # Product Catalog
│   │   │   ├── [id]/               # Single Product Details
│   │   │   │   ├── ProductClient.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── ShopClient.tsx
│   │   │   └── page.tsx            # Shop Listing
│   │   ├── HomeClient.tsx          # Homepage Client Component
│   │   ├── layout.tsx              # Locale Layout (Navbar/Footer)
│   │   └── page.tsx                # Landing Page
│   ├── favicon.ico
│   └── globals.css                 # Global Styles & Tailwind Directives
├── components/
│   ├── Footer.tsx                  # Footer with Team avatars
│   └── Navbar.tsx                  # Navigation bar
├── context/
│   ├── AuthContext.tsx             # Authentication state provider
│   └── CartContext.tsx             # Shopping cart state provider
├── lib/
│   ├── data.ts                     # Mock data (products, users, owners)
│   ├── dictionary.ts               # Translation loader
│   └── dictionaries/
│       ├── en.json                 # English translations
│       └── th.json                 # Thai translations
├── public/
│   └── owner/                      # Owner profile images
│       ├── Thanachot.png
│       ├── Ranchida.jpg
│       ├── Kanphitcha.JPG
│       └── Natthaya.jpg
├── middleware.ts                   # Locale detection & redirection
├── tailwind.config.ts              # Tailwind + DaisyUI configuration
└── package.json
```

### Core Components & Libs
- **`components/`**: Reusable UI components like `Navbar`, `Footer` (with team avatars).
- **`context/`**: Global state providers (`AuthContext`, `CartContext`).
- **`lib/`**:
  - `dictionary.ts`: Translation loader.
  - `dictionaries/`: JSON translation files (`en.json`, `th.json`).
  - `data.ts`: Mock data for products, users, and **owners** (team members with Thai names).
- **`middleware.ts`**: Handles locale detection and redirection.

### Team Members (Owners)
The project includes mock data for 4 team members displayed in the Footer and About page:
| Name | Thai Name | Role |
|------|-----------|------|
| Thanachot Phomthong | ธนโชติ | Master Chef |
| Ranchida Sarod | รัญชิดา สาโรจน์ | Tea Specialist |
| Kanphitcha Junpun | กานต์พิชชา จันทร์พันธ์ | Pastry Chef |
| Natthaya Patipatpakdee | ณัฐธยาน์ ปฏิพัทธ์ภักดี | Store Manager |
