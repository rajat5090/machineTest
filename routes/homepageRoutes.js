//This file contains routes for the homepage

//Importing modules
const express = require("express");
const router = express.Router();
const homepageController = require("../controller/homepageController");
//Defining routes

//posting details route
router.route("/").get(homepageController.homepage);

//Exporting routes
module.exports = router;
