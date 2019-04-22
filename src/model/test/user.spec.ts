import User, { UserModel } from "../user"
import faker from "faker";

describe("UserModel", () => {

    /*beforeAll(async () => {
        await User.deleteMany({});

        await User.create({
            name: "Julien Breiner",
            email: "julien.breiner @gmail.com",
            password: "pom"
        });
    })*/

    test("must hash password", async () => {

        const data = {
            name: "Hash password",
            email: faker.internet.email(),
            password: "pommpom"
        };

        const user = await User.create(data) as UserModel;

        expect(user.password).not.toBe(data.password);

    })

    test("must not hash password for non-new user", async () => {
        const data = {
            name: "Temp",
            email: faker.internet.email(),
            password: "pommpom"
        };

        const user = await User.create(data) as UserModel;

        const password = user.password;

        user.name = "Don't Hash";

        await user.save();

        expect(user.password).toBe(password);
    })
})