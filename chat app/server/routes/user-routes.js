import express from "express";
import getUsersForSidebar from '../controllers/user-controller.js'
import protectedRoute from "../middlewares/protectedRoutes.js";

const router = express.Router()

router.get('/', protectedRoute, getUsersForSidebar)

export default router;

