import { Router } from "express";
import {
  admiCreate,
  getAllWomen,
  getWomenForId,
} from "../controllers/women.controllers.js";

const route = Router();

route.get("/women", getAllWomen);
route.get("/women/:id", getWomenForId);
route.post("/women", admiCreate);
export default route;
