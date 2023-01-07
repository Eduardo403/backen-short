import express from "express";
import shortRoute from "./routes/shor.routes.js";
import { PORT } from "./config.js";
const app = express();

app.use(shortRoute);
app.listen(PORT);
console.log(`server listening on port ${PORT}`);
