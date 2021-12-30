import express from "express"
import { createProduct, deleteProduct, getAllProducts, getProductDetails, updateProduct } from "../controllers/productController.js"
import  {isAuthenticatedUser,authorizeRoles } from "../middlewares/auth.js"

const router=express.Router()
router.route("/products").get(isAuthenticatedUser, authorizeRoles("admin") ,getAllProducts)
router.route("/product/new").post(isAuthenticatedUser,createProduct)

router.route("/product/edit/:id").put(isAuthenticatedUser,updateProduct);

router.route("/product/:id").delete(isAuthenticatedUser,deleteProduct);
router.route("/product/:id").get(getProductDetails);
export default router 