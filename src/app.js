import express from "express";
import cors from "cors";
import getProductRoute from "./routes/getProduct.routes.js";
import adminRoute from "./routes/admin.routes.js";
import userRouter from "./routes/user.routes.js";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();
//for proces data to form
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(helmet());

//routes

app.use(getProductRoute);
app.use(adminRoute);
app.use(userRouter);
export default app;
