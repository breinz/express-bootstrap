"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env = process.env;
var test = env.NODE_ENV === "test";
exports.default = {
    BCRYPT_SALT: test ? 1 : 10,
    DB: "mongodb://0.0.0.0:27017/" + (test ? "db_test" : "db")
};
