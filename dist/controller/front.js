"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FrontController = /** @class */ (function () {
    function FrontController() {
    }
    /**
     * GET /
     * @param req
     * @param res
     */
    FrontController.prototype.index = function (req, res) {
        res.render("index");
    };
    /**
     * Get /signin
     * @param req
     * @param res
     */
    FrontController.prototype.getSignin = function (req, res) {
        res.render("signin");
    };
    /**
     * POST /signin
     * @param req
     * @param res
     */
    FrontController.prototype.signin = function (req, res) {
        res.redirect("/");
    };
    return FrontController;
}());
exports.default = FrontController;
