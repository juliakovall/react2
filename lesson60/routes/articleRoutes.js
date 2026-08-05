import { Router } from "express";

import {
  createArticle,
  deleteArticle,
  getArticleById,
  getArticles,
  updateArticle,
} from "../controllers/articleController.js";

const router = Router();

router.get("/", getArticles);

router.post("/", createArticle);

router.get("/:articleId", getArticleById);

router.put("/:articleId", updateArticle);

router.delete("/:articleId", deleteArticle);

export default router;
