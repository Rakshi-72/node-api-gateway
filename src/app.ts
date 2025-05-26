import bodyParser from "body-parser";
import express from "express";

import { yamlConfig } from "../yamlConfig";
import { productRouter } from "./routes/product.route";
yamlConfig();

const app = express();
app.use(bodyParser.json());
app.use("/products", productRouter);

export { app };
