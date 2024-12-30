import {Router} from "express";
import {
  getPersonas,
  getPersonaByDni,
  createPersona,
  updatePersona,
  deletePersona,

} from "../controllers/personas.controller.js";

const router = Router();

router.get("/api/persona", getPersonas);

router.get("/api/persona/:dni", getPersonaByDni);

router.post("/api/persona", createPersona);

router.put("/api/persona/:dni", updatePersona);

router.delete("/api/persona/:dni", deletePersona);

export default router;