import { Router } from "express";
import { signup } from "../controller/signup.js";
import { login } from "../controller/login.js";
import { getAllUser } from "../controller/getAllUser.js";
import { deleteUser } from "../controller/deleteUser.js"; 
import { updateUser } from "../controller/updateUser.js";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/getAllUser").get(getAllUser);
router.route("/deleteUser/:id").delete(deleteUser); 
router.route("/updateUser/:id").patch(updateUser); 

export default router;
