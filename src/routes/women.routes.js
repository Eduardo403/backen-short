import { Router } from "express";
import {
  getAllWomen,
  getWomenForId,
} from "../controllers/women.controllers.js";
import { pool } from "../db.js";

const route = Router();

route.get("/women", getAllWomen);
route.get("/women/:id", getWomenForId);
export default route;
