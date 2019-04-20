"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FrontController = /** @class */ (function () {
    function FrontController() {
    }
    FrontController.prototype.index = function (req, res) {
        res.render("index");
    };
    return FrontController;
}());
exports.default = FrontController;
