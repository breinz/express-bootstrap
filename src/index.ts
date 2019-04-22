import express from "express"
import path from "path"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

import routers from "./router"
import { userMiddleware } from "./middleware"

let app = express()

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cookie parser
app.use(cookieParser());

// Static content
app.use(express.static("dist/assets"));

// View engine
app.set("view engine", "pug")
app.set('views', path.join(__dirname, '../src/views'));

// Check for a logged in user (populates req.current_user & res.locals.current_user)
app.use(userMiddleware.saveLoggedInUser);

// Route
app.use("/", routers.front);
app.use("/admin", routers.admin);

// Start server
app.listen(3000, "0.0.0.0", () => {
    console.log("App running")
})


export default app;