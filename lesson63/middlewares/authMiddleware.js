import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../controllers/authController.js";

export function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send("Unauthorized.");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;

    next();
  } catch {
    return res.status(401).send("Invalid or expired token.");
  }
}
