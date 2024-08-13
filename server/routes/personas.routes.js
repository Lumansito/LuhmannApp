import {Router} from "express";
import {
  getEmpleados,
  getArquitectos,
  getDueños,
  getPersonaByDniRol,
  getArquitectosByObra,
  getDueñosByObra,
  createPersona,
  updatePersona,
  deletePersona,

} from "../controllers/personas.controller.js";

const router = Router();

router.get("/api/empleados", getEmpleados);

router.get("/api/arquitectos", getArquitectos);

router.get("/api/duenos", getDueños); 

router.get("/api/persona/:dni/:rol", getPersonaByDniRol);

router.get("/api/arquitectos/:nroObra", getArquitectosByObra);

router.get("/api/duenos/:nroObra", getDueñosByObra);

router.post("/api/persona", createPersona);

router.put("/api/persona/:dni/:rol", updatePersona);

router.delete("/api/persona/:dni/:rol", deletePersona);

export default router;