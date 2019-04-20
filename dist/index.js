"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var front_1 = __importDefault(require("./controller/front"));
var frontController = new front_1.default();
var app = express_1.default();
// Body parser
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
// Cookie parser
app.use(cookie_parser_1.default());
// View engine
app.set("view engine", "pug");
app.set('views', path_1.default.join(__dirname, '../src/views'));
// Route
app.get("/", frontController.index);
// Start server
app.listen(3000, "0.0.0.0", function () {
    console.log("App running");
});
exports.default = app;
