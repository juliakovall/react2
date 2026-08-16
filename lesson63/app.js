import express from "express";
import cookieParser from "cookie-parser";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import authRoutes from "./routes/authRoutes.js";
import themeRoutes from "./routes/themeRoutes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";

const app = express();

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(join(__dirname, "public")));

app.get("/", (req, res) => {
  const theme = req.cookies.theme || "light";

  res.render("index", {
    theme,
  });
});

app.get("/profile", authMiddleware, (req, res) => {
  const theme = req.cookies.theme || "light";

  res.render("profile", {
    username: req.user.username,
    theme,
  });
});

app.use("/auth", authRoutes);
app.use("/theme", themeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
