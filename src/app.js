import express from "express";
import cors from "cors";
import shortRoute from "./routes/shor.routes.js";
import menRoute from "./routes/men.routes.js";
import womenRoute from "./routes/women.routes.js";

import morgan from "morgan";

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use(shortRoute);
app.use(womenRoute);
app.use(menRoute);

export default app;