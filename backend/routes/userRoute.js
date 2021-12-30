import express from 'express'
import { forgotPasword, loginUser, logout, registerUser, resetPassword } from '../controllers/userController.js'
const router=express.Router();
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logout )
router.route("/forgotPassword").post(forgotPasword)
router.route("/password/reset/:token").put(resetPassword)
export default router