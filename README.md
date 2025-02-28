# React GitHub Search

A simple React app to search for GitHub users and view their public repositories.

## 🌍 Live Demo

[https://react-interview-test.vercel.app/](https://react-interview-test.vercel.app/)

## 🚀 Features

- Search GitHub users
- View user details and public repositories
- URL-based search using TanStack Router
- Form validation with Zod
- Styled with Tailwind CSS

## 📦 Tech Stack

- React 19 + TypeScript
- TanStack Router for navigation
- React Hook Form & Zod for form validation
- Tailwind CSS for styling
- Vitest & Testing Library for testing

## 🔧 Getting Started

Create `.env` file

- VITE_GITHUB_TOKEN: Your GIthub Fine-grained personal access tokens

```bash
cp env.example .env

```

1️⃣ Install Dependencies

```bash
npm install
```

2️⃣ Start the Development Server

```bash
npm start
```

Will runs on http://localhost:3000

4️⃣ Build for Production

```bash
npm run build
```

## 📂 Project Structure

- `src/routes/` – File-based routing setup
- `src/components/` – Reusable UI components
- `src/hooks/` – Custom hooks

## 📜 License

MIT
