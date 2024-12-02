const express = require('express');
const router = express.Router();
const Product = require("../models/product.model");
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');

//get all products
router.get("/", getProducts);

//get product by id

router.get("/:id", getProduct);

//create product
router.post("/", createProduct);

//update product
router.put("/:id", updateProduct);

//delete products

router.delete("/:id", deleteProduct);

module.exports = router;

