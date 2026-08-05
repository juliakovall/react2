import express from "express";

import articleRoutes from "./routes/articleRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Get root route.");
});

app.use("/users", userRoutes);

app.use("/articles", articleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
