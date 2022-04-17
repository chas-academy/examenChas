import express from "express";
const router = express.Router();
import {
  authUser,
  getUser,
  registerUser,
  updateUser,
  getUsers,
} from "../controllers/userControllers.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getUser).put(protect, updateUser);
export default router;
