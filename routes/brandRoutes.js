//This file contains routes for the brand.

//Importing modules
const express = require("express");
const router = express.Router();
const brandController = require("./../controller/brandController");

//Defining routes

//posting details route
router.route("/add").post(brandController.add);

//Exporting routes
module.exports = router;
