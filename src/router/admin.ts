import express from "express"

import AdminController from "../controller/admin"

const adminController = new AdminController();

const router = express.Router();

router.get("/", adminController.index);

export default router