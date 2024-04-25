import { Router } from "express";
import * as personasController from "../controllers/personas.controller"
const router = Router();
router.get("/", personasController.getPersonas)
router.get("/:personaID", personasController.getPersonasById)
router.put("/:personaID", personasController.updatePersona)
router.post("/", personasController.createPersona)
router.delete("/:personaID", personasController.deletePersona)


export default router;