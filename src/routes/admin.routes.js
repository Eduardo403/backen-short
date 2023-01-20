import Router from "express-promise-router";

import { admiCreate } from "../controllers/admi.controllers.js";

const route = Router();

route.post("/admi", admiCreate);

export default route;
