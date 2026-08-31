import "dotenv/config";

import express from "express";
import session from "express-session";

import { connectDB } from "./config/db.js";
import passport from "./config/passport.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Подключение к MongoDB через Mongoose
await connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 * 1000,
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

// Главная страница
app.get("/", (req, res) => {
  res.send("Lesson 70. MongoDB + Mongoose");
});

// Маршруты
app.use("/", authRoutes);
app.use("/users", userRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
