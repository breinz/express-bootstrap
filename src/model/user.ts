import { Document, Schema, model, Model } from "mongoose"
import bcrypt from "bcrypt";

import config from "../config"
import { db } from "../db"

/**
 * Model
 */
export type UserModel = Document & {
    /**
     * User's name
     */
    name: string,
    /**
     * User's email
     */
    email: string,
    /**
     * User's password (hashed)
     */
    password: string
}

/**
 * Schema
 */
const userSchema = new Schema({
    name: String,
    email: String,
    password: String
})

/**
 * Hash the password
 */
userSchema.pre("save", async function (next) {
    const user = this as UserModel;

    if (user.isNew) {
        user.password = await bcrypt.hash(user.password, config.BCRYPT_SALT)
    }

    next();
});

const User = db.model("User", userSchema) as Model<Document> & UserModel;
export default User;