//This file contains routes for the subcategory.

//Importing modules
const express = require("express");
const router = express.Router();
const subcategortyController = require("./../controller/subcategoryController");

//Defining routes

//posting details route
router.route("/add").post(subcategortyController.add);

//Exporting routes
module.exports = router;
