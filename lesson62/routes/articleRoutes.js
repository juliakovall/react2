import { Router } from "express";

import {
  getArticleById,
  getArticles,
} from "../controllers/articleController.js";

const router = Router();

router.get("/", getArticles);
router.get("/:articleId", getArticleById);

export default router;
