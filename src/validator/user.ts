import User from "../model/user";

type Data = {
    name?: string,
    email?: string,
    password?: string,
    password_repeat?: string
}

export default class UserValidator {

    public errors: any;

    private user: Data;

    private email_regex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    constructor(user: Data) {
        this.user = user;
        this.errors = {};
    }

    /**
     * Is the user valid to get signed in
     * 
     */
    public isValidForSignin(): boolean {
        this.validateName();
        this.validateEmail();

        return Object.keys(this.errors).length === 0;
    }

    /**
     * Validate the name
     * - required
     */
    validateName() {

        if (!this.user.name || !this.user.name.length) {
            return this.errors.name = "required"
        }
    }

    /**
     * Validate email
     * -required
     * -valid email
     * -not taken
     */
    async validateEmail() {
        // Required
        if (!this.user.email || !this.user.email.length) {
            return this.errors.email = "required"
        }

        // Valid
        if (!this.email_regex.test(this.user.email)) {
            return this.errors.email = "invalid"
        }

        // Not taken
        const count_user = await User.countDocuments({ email: this.user.email });

        if (count_user > 0) {
            return this.errors.email = "taken"
        }
    }
}