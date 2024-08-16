import {Router} from "express";
import {
    createVisita,
    getVisitaById,
    getVisitaByObra

} from "../controllers/visitas.controllers.js";

const router = Router();

router.post("/api/visita", createVisita);

router.get ("/api/visita/:idVisita", getVisitaById);

router.get ("/api/visita/obra/:nroObra", getVisitaByObra);
export default router;