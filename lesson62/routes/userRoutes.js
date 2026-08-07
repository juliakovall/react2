import { Router } from "express";

import { getUserById, getUsers } from "../controllers/userController.js";

const router = Router();

router.get("/", getUsers);
router.get("/:userId", getUserById);

export default router;
