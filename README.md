# 🚗 Car Rental Admin Dashboard

This is a custom **Admin Dashboard** built with [Next.js App Router](https://nextjs.org/docs/app), [Prisma ORM](https://www.prisma.io/), and [SQLite](https://www.sqlite.org/index.html). It includes authentication, listing management, pagination, and feedback messaging using React Context.

## ✨ Features

- 🔐 Admin authentication using cookies
- 🚗 Create, read, update, and approve/reject listings
- 📄 View full listing details
- ✏️ Edit listing information
- ✅ Feedback messages via Context API
- ⚡ Server-side pagination
- 💽 SQLite database using Prisma ORM
- 🧑‍💻 Built with Next.js 14 App Router & TypeScript

## 📦 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **ORM**: Prisma
- **Database**: SQLite (for local dev)
- **State Management**: React Context API

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/car-rental-admin.git
cd car-rental-admin
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables

Create `.env` and `.env.local` files:

```bash
cp .env.example .env
cp .env.local.example .env.local
```

- `.env`:
  ```env
  DATABASE_URL="file:./dev.db"
  ```

- `.env.local`:
  ```env
  NEXT_BASE_URL="http://localhost:3000"
  ```

### 4. Setup Prisma

```bash
npx prisma generate
npx prisma db push
npx prisma db seed  # optional, to seed with sample data
```

### 5. Start Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

## 🧪 Admin Auth

This dashboard uses a cookie-based token (`admin-token`) to protect routes. For testing:

- Set cookie manually using browser dev tools:
  ```txt
  Name: admin-token
  Value: valid-token
  ```
- Or log in from `/login` route if implemented

## 🗃️ Folder Structure Highlights

```
/app
  /api         - API routes (GET, PATCH, etc.)
  /approved    - Dashboard page with listing cards
  /viewItem    - Full listing view
  /editItem    - Edit form

/lib
  prisma.ts    - Prisma client
  data.ts      - (Old) static data file

/prisma
  schema.prisma
  seed.ts      - Data seeding script
```

## 🧪 Feedback Messages

We use the **Context API** to show feedback messages globally (e.g., success/error on update). This ensures clean UI updates without prop drilling.

## 📈 Performance Optimizations

- Optimized re-renders using `React.memo` for listing cards
- Pagination to limit data per page