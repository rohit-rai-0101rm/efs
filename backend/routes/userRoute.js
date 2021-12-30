import express from 'express'
import { forgotPasword, loginUser, logout, registerUser } from '../controllers/userController.js'
const router=express.Router();
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logout )
router.route("/forgotPassword").post(forgotPasword)
export default router