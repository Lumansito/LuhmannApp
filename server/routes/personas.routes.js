import {Router} from "express";
import {
  getPersonas,
  getPersonaByDniRol,
  createPersona,
  updatePersona,
  deletePersona,

} from "../controllers/personas.controller.js";

const router = Router();

router.get("/api/personas", getPersonas);

router.get("/api/persona/:dni", getPersonaByDniRol);

router.post("/api/persona", createPersona);

router.put("/api/persona/:dni", updatePersona);

router.delete("/api/persona/:dni", deletePersona);

export default router;