import express from "express"
import { createProduct, createProductReview, deleteProduct, deleteReview, getAllProducts, getProductDetails, getProductReviews, updateProduct } from "../controllers/productController.js"
import  {isAuthenticatedUser,authorizeRoles } from "../middlewares/auth.js"

const router=express.Router()
router.route("/products").get(getAllProducts)
router.route("/product/new").post(isAuthenticatedUser, authorizeRoles("admin"),createProduct)

router.route("/product/edit/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct);

router.route("/product/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);
router.route("/product/:id").get(getProductDetails);
router.route("/reviews").put(isAuthenticatedUser,createProductReview)
router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview)

export default router 