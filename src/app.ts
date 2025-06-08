import bodyParser from "body-parser";
import express from "express";

import { yamlConfig } from "../yamlConfig";
import { getUserConfig } from "./config/user.config";
import { setConfig } from "./helpers/commonHelpers";
import { productRouter } from "./routes/product.route";
import { userRouter } from "./routes/user.route";
yamlConfig();
getUserConfig();

const app = express();
app.use(bodyParser.json());
app.use("/products", productRouter);
app.use("/users", setConfig, userRouter);

export { app };
