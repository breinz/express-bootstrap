import express from "express"

import FrontController from "../controller/front"

const frontController = new FrontController();

const router = express.Router();

router.get("/", frontController.index);

export default router