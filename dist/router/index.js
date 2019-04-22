"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var admin_1 = __importDefault(require("./admin"));
var front_1 = __importDefault(require("./front"));
exports.default = {
    admin: admin_1.default,
    front: front_1.default
};
