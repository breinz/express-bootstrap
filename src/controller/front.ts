import { Request, Response } from "express";

export default class FrontController {

    public index(req: Request, res: Response) {
        res.render("index");

    }
}