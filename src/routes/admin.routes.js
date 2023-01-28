import Router from "express";

import { newProduct, updateProduct } from "../controllers/admi.controllers.js";

const route = Router();

route.post("/admi/newProduct", newProduct);
route.patch("/admi/updateProduct/:id", updateProduct);
route.delete("admi/delete/:id");

export default route;
