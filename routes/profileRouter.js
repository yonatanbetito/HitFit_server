import express from "express";
import { login, updateProfileField } from "../controllers/profileController.js";

const router = express.Router();

router.get("/login", login);
router.patch("/profiles/:id", updateProfileField);

export default router;
