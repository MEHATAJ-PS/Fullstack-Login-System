
# 🔐 Fullstack Login System

A complete **Login and Signup Authentication System** built with **Node.js**, **Express**, **MongoDB**, and **React.js**. The system uses **JWT (JSON Web Tokens)** for secure session management and features user registration, login, and protected routes on the frontend.

---

## 📂 Project Structure

```
FULLSTACK-LOGIN-SYSTEM/
├── Backend/ ← Node.js + Express server
│   ├── config/            ← MongoDB config
│   ├── controllers/       ← Auth logic (register/login)
│   ├── middleware/        ← JWT middleware
│   ├── models/            ← Mongoose user schema
│   ├── routes/            ← API route handlers
│   ├── utils/             ← Token generator
│   ├── .env               ← Environment variables (not pushed)
│   ├── server.js          ← Main entry point
│   └── package.json
│
├── Frontend/              ← React.js client
│   ├── src/               ← Pages: Login, Register, Protected
│   ├── public/            ← index.html
|   ├── build/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Features

- 🔐 User Registration with email/password
- 🔑 Login with JWT-based authentication
- 🛡️ Protected frontend routes (accessible only after login)
- 📦 MongoDB integration using **Mongoose**
- 🌐 CORS-enabled API communication between frontend and backend
- 📁 `.env` file to secure sensitive data

---

## 🧪 Technologies Used

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- bcryptjs

**Frontend:**
- React.js
- Axios
- React Router

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MEHATAJ-PS/Fullstack-Login-System.git
cd Fullstack-Login-System
```

### 2. Setup Backend

```bash
cd Backend
npm install
```

🔒 Create a `.env` file in `/Backend`:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
node server.js
```

### 3. Setup Frontend

```bash
cd ../Frontend
npm install
npm start
```

- Frontend runs on: `http://localhost:3000`  
- Backend runs on: `http://localhost:5001`

---

## 🔄 API Endpoints

### `POST /api/register`
- Registers new users  
- Body: `{ name, email, password }`

### `POST /api/login`
- Logs in existing users  
- Body: `{ email, password }`  
- Returns: JWT token

### `GET /api/protected`
- Sample protected route  
- Requires: JWT token in headers

---

## ✅ Screens

- ✅ Register Page
- ✅ Login Page
- ✅ Protected Page (requires authentication)

---

## 🛡️ Environment Variables

Your `.env` file should contain:

```env
PORT=5001
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/loginDB
JWT_SECRET=YourSecretKey
```

✅ This file is ignored via `.gitignore`.

---

## ⚙️ .gitignore

Your project uses `.gitignore` to avoid uploading:

```bash
/node_modules
.env
/build
```

---

## 💡 Note

This project is **not deployed** on Render or Vercel.  
It runs **completely on localhost** for development and testing purposes.

---

## 🧑‍💼 Author

**Mehataj P S**  
📧 mehataj73@gmail.com  
🔗 [GitHub](https://github.com/MEHATAJ-PS)

---

## 📄 License

This project is **open-source** and available under the [MIT License](LICENSE).