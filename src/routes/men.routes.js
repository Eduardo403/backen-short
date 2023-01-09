import { Router } from "express";
import { getAllMen, getMenForId } from "../controllers/men.controllers.js";

const router = Router();

router.get("/men", getAllMen);
router.get("/men/:id", getMenForId);

export default router;
