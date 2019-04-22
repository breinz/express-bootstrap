import { UserModel } from "./model/user";

declare global {
    namespace Express {
        export interface Request {
            current_user?: UserModel
        }
    }
}