import { Router } from "express";

import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/userController.js";

import { basicAuth } from "../middlewares/auth.js";
import { validateUserInput } from "../middlewares/validate.js";

const router = Router();

router.use(basicAuth);

router.get("/", getUsers);

router.post("/", validateUserInput, createUser);

router.get("/:userId", getUserById);

router.put("/:userId", validateUserInput, updateUser);

router.delete("/:userId", deleteUser);

export default router;
