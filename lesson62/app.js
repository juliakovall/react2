import express from "express";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import articleRoutes from "./routes/articleRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("views", join(__dirname, "views"));

app.use(express.static(join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(`
    <h1>Lesson 62</h1>
    <p><a href="/users">Users with Pug</a></p>
    <p><a href="/articles">Articles with EJS</a></p>
  `);
});

app.use("/users", userRoutes);
app.use("/articles", articleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
