const env = process.env;

const test = env.NODE_ENV === "test";

export default {
    BCRYPT_SALT: test ? 1 : 10,
    DB: `mongodb://0.0.0.0:27017/${test ? "db_test" : "db"}`
}