import { Router } from "express";
import {
  admiCreate,
  getAllWomen,
  getWomenForId,
} from "../controllers/women.controllers.js";

const route = Router();

route.get("/shop/:category", getAllWomen);
route.get("shop/women/:id", getWomenForId);
route.post("/shop/admi", admiCreate);
export default route;
