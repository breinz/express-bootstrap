import User from "../model/user";

module.exports = async () => {
    await User.deleteMany({});
    return;
}