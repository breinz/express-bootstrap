"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdminController = /** @class */ (function () {
    function AdminController() {
    }
    AdminController.prototype.index = function (req, res) {
        res.render("admin/index");
    };
    return AdminController;
}());
exports.default = AdminController;
