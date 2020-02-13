import express from "express";
//import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import routes from "./routes/index.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use(express.static(path.join("./public")));

app.use(routes);

export default app;
