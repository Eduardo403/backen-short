import { Router } from "express";
import {
  getProductForCategory,
  getProductForId,
  getProductForName,
} from "../controllers/getProduct.controllers.js";

const route = Router();

route.get("/shop/:category", getProductForCategory);
route.get("/shop/women/:id", getProductForId);
route.get("/shop/name/:name", getProductForName);
export default route;
