import { Router } from "express";
import * as usersController from "../controllers/users.controller"
const router = Router();
import {AuthJWT} from "../middlewares"
router.get("/",AuthJWT.verifyToken,usersController.getUsers)
router.get("/:userID",AuthJWT.verifyToken, usersController.getUsersById)
router.put("/:userID", [AuthJWT.verifyToken, AuthJWT.isAdmin],usersController.updateUser)
router.post("/", [AuthJWT.verifyToken, AuthJWT.isAdmin],usersController.createUser)
router.delete("/:userID", [AuthJWT.verifyToken,AuthJWT.isAdmin],usersController.deleteUser)
export default router;