import UserMiddleware from "./user"
import FlashMiddleware from "./flash";


export const userMiddleware = new UserMiddleware();
export const flashMiddleware = new FlashMiddleware();
