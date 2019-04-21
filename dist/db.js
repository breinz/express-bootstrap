"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("./config"));
exports.db = mongoose_1.default.createConnection(config_1.default.DB, { useNewUrlParser: true });
exports.db.then(function (value) {
    console.log("DB connected", config_1.default.DB);
});
