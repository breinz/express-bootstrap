import { Request, Response, NextFunction } from "express";

import UserValidator from "../validator/user";

export default class UserMiddleware {

    public validSignin(req: Request, res: Response, next: NextFunction): void {
        const validator = new UserValidator(req.body);

        if (!validator.isValidForSignin()) {
            return res.render("signin", { data: req.body, errors: validator.errors });
        }

        next();
    }
}