import express from "express"

import AdminController from "../controller/admin"
import { userMiddleware } from "../middleware"

const adminController = new AdminController();

const router = express.Router();

router.get("/", userMiddleware.loginShield, adminController.index);

export default router