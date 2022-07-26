//This file contains routes for the product.

//Importing modules
const express = require("express");
const router = express.Router();
const prodctController = require("./../controller/productController");

/****************Defining routes********************/
//posting details route
router.route("/add").post(prodctController.add);

//get all products
router.route("/").get(prodctController.get);

//get products by brand Id
router.route("/brands/:brandId").get(prodctController.getByBrands);

//get products by category Id
router.route("/category/:categoryId").get(prodctController.getByCategory);

//get products by subcategory Id
router.route("/subcategory/:subId").get(prodctController.getBySubcategory);

//Exporting routes
module.exports = router;
