import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
const router = Router();
router.post("/singup", authCtrl.singup);
router.post("/singin", authCtrl.singin);
export default router;