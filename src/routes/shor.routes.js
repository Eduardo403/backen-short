import Router from "express";
import { getALL } from "../controllers/shor.contollers.js";
import { pool } from "../db.js";

const route = Router();
route.get("/", getALL);
route.get("/collections", (req, res) => {});



export default route;
