import { Router } from "express";

import {
  createManyUsers,
  createUser,
  deleteManyUsers,
  deleteUser,
  getUsers,
  replaceUser,
  updateManyUsers,
  updateUser,
} from "../controllers/userController.js";

const router = Router();

router.get("/", getUsers);

router.post("/", createUser);
router.post("/many", createManyUsers);

router.put("/update-many", updateManyUsers);
router.put("/replace/:id", replaceUser);
router.put("/:id", updateUser);

router.delete("/delete-many", deleteManyUsers);
router.delete("/:id", deleteUser);

export default router;
