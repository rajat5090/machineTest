//This file contains routes for the category.

//Importing modules
const express = require("express");
const router = express.Router();
const categortyController = require("./../controller/categortyController");
//Defining routes

//posting details route
router.route("/add").post(categortyController.add);

//Exporting routes
module.exports = router;
