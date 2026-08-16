import { Router } from "express";
import { saveTheme } from "../controllers/themeController.js";

const router = Router();

router.post("/", saveTheme);

export default router;
