import { Router } from "express";
import {getPredios, createPredios, updatePredios, deletePredios} from '../controllers/predios.controllers.js'

const router = Router();

router.get("/predio", getPredios);
router.post("/predio", createPredios );
router.put("/predio", updatePredios);
router.delete("/predio", deletePredios);

export default router;
