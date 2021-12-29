import express from "express"
import { createProduct, deleteProduct, getAllProducts, getProductDetails, updateProduct } from "../controllers/productController.js"

const router=express.Router()
router.route("/products").get(getAllProducts)
router.route("/product/new").post(createProduct)

router.route("/product/edit/:id").put(updateProduct);

router.route("/product/:id").delete(deleteProduct);
router.route("/product/:id").get(getProductDetails);
export default router