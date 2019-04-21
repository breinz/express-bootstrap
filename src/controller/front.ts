import { Request, Response } from "express";
import User from "../model/user";

export default class FrontController {

    /**
     * GET /
     * @param req 
     * @param res 
     */
    public index(req: Request, res: Response) {
        res.render("index");

    }

    /**
     * Get /signin
     * @param req 
     * @param res 
     */
    public getSignin(req: Request, res: Response) {
        res.render("signin")
    }
    /**
     * POST /signin
     * @param req 
     * @param res 
     */
    public async signin(req: Request, res: Response) {
        await User.create(req.body);

        res.redirect("/");
    }
}