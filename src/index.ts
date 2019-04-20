import express from "express"
import path from "path"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

import FrontController from "./controller/front";

const frontController = new FrontController();

let app = express()

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cookie parser
app.use(cookieParser());

// View engine
app.set("view engine", "pug")
app.set('views', path.join(__dirname, '../src/views'));

// Route
app.get("/", frontController.index);

// Start server
app.listen(3000, "0.0.0.0", () => {
    console.log("App running")
})


export default app;