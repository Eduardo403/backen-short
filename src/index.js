import app from "./app.js";
import { PORT } from "./config.js";
//inite server
app.listen(PORT);
console.log(`server listening on port ${PORT}`);
