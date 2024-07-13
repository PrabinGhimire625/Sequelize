import { Router } from "express";
import { signup } from "../controller/signup.js";
import { login } from "../controller/login.js";
import { getAllUser } from "../controller/getAllUser.js";
import { deleteUser } from "../controller/deleteUser.js"; 
import { updateUser } from "../controller/updateUser.js";
import { getSingleUser } from "../controller/getSingleUser.js";
import { profile } from "../controller/profile.js";
import { jwtAuthMiddleware } from "../jwt.js"; // Import jwtAuthMiddleware

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getAllUser", getAllUser);
router.delete("/deleteUser/:id", deleteUser); 
router.patch("/updateUser/:id", updateUser); 
router.get("/getSingleUser/:id", getSingleUser);

// Protect the profile route with jwtAuthMiddleware
router.get("/profile", jwtAuthMiddleware, profile);

export default router;
