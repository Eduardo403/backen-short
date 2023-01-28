import express from "express";
import cors from "cors";
import getProductRoute from "./routes/getProduct.routes.js";
import adminRoute from "./routes/admin.routes.js";
import morgan from "morgan";

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes

app.use(getProductRoute);
app.use(adminRoute);
export default app;
