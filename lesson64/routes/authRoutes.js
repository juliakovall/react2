import { Router } from "express";
import passport from "passport";

import {
  logout,
  protectedRoute,
  register,
} from "../controllers/authController.js";

import { ensureAuthenticated } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/register", register);

router.post(
  "/login",
  passport.authenticate("local", {
    failureMessage: true,
  }),
  (req, res) => {
    res.send("Login successful.");
  },
);

router.post("/logout", logout);

router.get("/protected", ensureAuthenticated, protectedRoute);

export default router;
