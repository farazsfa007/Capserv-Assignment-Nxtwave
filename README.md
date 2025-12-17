# 📘 Capserv Frontend Intern Assignment – Loan Management Mini App

A **React-based Single Page Application (SPA)** that simulates an internal **Loan Management Dashboard** with authentication, OTP verification, protected routes, and dashboard filtering.

This project is built using **Vite + React**, with **normal CSS** (no UI framework) and **LocalStorage** for data persistence.

---

## 🚀 Live Features

- 🔐 Login with Email & Password
- 📲 OTP-based authentication
- 📝 New user Signup
- 🛡️ Protected Dashboard Route
- 📊 Loan Management Dashboard
- 🔍 Search & Filter Loans
- 🔔 Toast Notifications
- 💾 LocalStorage-based CRUD
- 🎨 Clean & professional CSS UI

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Routing:** React Router DOM
- **State Management:** React Hooks
- **Notifications:** react-hot-toast
- **Styling:** Plain CSS
- **Data Storage:** Browser LocalStorage

---

## 📁 Project Structure

src/
│
├── data/
│ └── mockData.js
│
├── pages/
│ ├── Login.jsx
│ ├── Signup.jsx
│ └── Dashboard.jsx
│
├── routes/
│ └── ProtectedRoute.jsx
│
├── utils/
│ └── storage.js
│
├── styles/
│ ├── Login.css
│ ├── Signup.css
│ └── Dashboard.css
│
├── App.jsx
├── main.jsx



---

## 🔐 Authentication Flow

1. User logs in using **email & password**
2. OTP screen appears
3. OTP verification is done
4. On success, user is redirected to dashboard
5. Protected routes prevent unauthenticated access

> **Note:** OTP is mocked for demo purposes.

---

## 📊 Dashboard Features

- Welcome message with user name
- Logout functionality
- Search loans by customer name
- Filter loans by status (Approved / Pending)
- Tabular display of loan records

---

## 💾 LocalStorage Usage

| Key          | Purpose                  |
|--------------|--------------------------|
| `users`      | Stores registered users  |
| `loans`      | Stores loan records      |
| `currentUser`| Logged-in user session   |

---

## ⚙️ Setup Instructions

### 1️⃣ Create a Vite React App

```bash
npm create vite@latest capserv-loan-app
cd capserv-loan-app
npm install
