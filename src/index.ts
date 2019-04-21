import express from "express"
import path from "path"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

import { db } from "./db"
import frontRouter from "./router/front"
import adminRouter from "./router/admin"

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

// Route
app.use("/", frontRouter);
app.use("/admin", adminRouter);

// Start server
app.listen(3000, "0.0.0.0", () => {
    console.log("App running")
})


export default app;