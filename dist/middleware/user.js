"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../validator/user"));
var UserMiddleware = /** @class */ (function () {
    function UserMiddleware() {
    }
    UserMiddleware.prototype.validSignin = function (req, res, next) {
        var validator = new user_1.default(req.body);
        if (!validator.isValidForSignin()) {
            return res.render("signin", { data: req.body, errors: validator.errors });
        }
        next();
    };
    return UserMiddleware;
}());
exports.default = UserMiddleware;
