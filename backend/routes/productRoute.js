import express from "express"
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controllers/productController.js"

const router=express.Router()
router.route("/products").get(getAllProducts)
router.route("/product/new").post(createProduct)
router.route("/product/edit/:id").get(getProductById).put(updateProduct)
router.route("/product/:id").get(getProductById).delete(deleteProduct)

export default router