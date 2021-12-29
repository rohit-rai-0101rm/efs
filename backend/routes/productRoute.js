import express from "express"
import { createProduct, getProducts } from "../controllers/productController.js"

const router=express.Router()
router.route("/products").get(getProducts)
router.route("/product/new").post(createProduct)
export default router