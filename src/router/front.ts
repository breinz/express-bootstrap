import express from "express"

import FrontController from "../controller/front"
import UserMiddleware from "../middleware/user"

const frontController = new FrontController();
const userMiddleware = new UserMiddleware();

const router = express.Router();

router.get("/", frontController.index);
router.get("/signin", frontController.getSignin);
router.post("/signin", userMiddleware.validSignin, frontController.signin);

export default router