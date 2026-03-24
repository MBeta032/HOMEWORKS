# 🔐 Challenge 06 — Demo Login Page con Rutas Privadas

Este challenge consiste en construir una aplicación en **React + TypeScript** con un sistema básico de autenticación, usando:

- **Context API**
- **Provider**
- **State**
- **React Router**
- **rutas privadas**

Además, después del login, se integran dos páginas privadas correspondientes a los ejercicios anteriores:

- **ATM**
- **Library**

---

## 👤 Información del estudiante

- **Nombre:** Manuel Betancurt Pérez
- **Código:** 2236320
- **Correo:** manuel.betancurt@uao.edu.co

---

## 🎯 Objetivo del challenge

Desarrollar una **Demo Login Page** que permita:

- iniciar sesión con credenciales definidas
- manejar el estado global de autenticación
- proteger rutas privadas
- mostrar el usuario actual logueado
- navegar hacia dos páginas privadas diferentes

---

## 📌 Requerimientos del ejercicio

La aplicación debe contener:

- **Email**
- **Password**
- **Button to Login**

Credenciales válidas:

- **Email:** `user@mail.com`
- **Password:** `123`

Además, debe cumplir con:

1. usar **Context, Provider y State**
2. crear **2 páginas privadas**
3. probar rutas privadas con **login y logout**
4. mostrar el **username actual** cuando el usuario esté logueado

---

## 🛠️ Tecnologías usadas

- **React**
- **TypeScript**
- **React Router DOM**
- **Context API**
- **CSS**
- **Vite**

---

## 🧩 Estructura general del proyecto

```bash
src/
│
├── algorithms/
│   ├── Queue.class.ts
│   └── Stack.class.ts
├── components/
│   ├── atm/
│   ├── library/
│   └── shared/
│       ├── Header.tsx
│       ├── PrivateRoute.tsx
│       └── Button.tsx
├── context/
│   └── AuthContext.tsx
├── data/
│   ├── ATMdata.ts
│   └── books.mock.data.ts
├── hooks/
│   └── useAuth.ts
├── interfaces/
│   ├── auth.interface.ts
│   ├── IATMRecord.interface.ts
│   └── book.interface.ts
├── pages/
│   ├── Login.tsx
│   ├── Home.tsx
│   ├── ATM.tsx
│   └── Library.tsx
├── router/
│   └── AppRouter.tsx
├── styles/
│   └── index.css
├── App.tsx
└── main.tsx
