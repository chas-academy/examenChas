import express from "express";
const router = express.Router();
import {
  authUser,
  getUser,
  registerUser,
  updateUser,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUser).put(protect, updateUser);
export default router;
