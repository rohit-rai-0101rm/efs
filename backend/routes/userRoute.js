import express from 'express'
import { deleteUser, forgotPasword, getAllUsers, getSingleUser, getUserDetails, loginUser, logout, registerUser, resetPassword, updatePassword, updateUserProfile, updateUserRole } from '../controllers/userController.js'
import  {isAuthenticatedUser,authorizeRoles } from "../middlewares/auth.js"

const router=express.Router();
router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").get(logout )
router.route("/forgotPassword").post(forgotPasword)
router.route("/password/reset/:token").put(resetPassword)
router.route("/me").get(isAuthenticatedUser,getUserDetails)
router.route("/password/update").put(isAuthenticatedUser,updatePassword)
router.route("/me/update").put(isAuthenticatedUser,updateUserProfile)
router.route("/admin/users").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUsers)
router.route("/admin/user/:id").get(isAuthenticatedUser,authorizeRoles("admin"),getSingleUser).put(isAuthenticatedUser,authorizeRoles("admin"),updateUserRole).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteUser)

export default router