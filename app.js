const express = require("express");

//creating an express app
const app = express();

//defining routes
const homepageRoutes = require(`${__dirname}/routes/homepageRoutes`);
const categoryRoutes = require(`${__dirname}/routes/categoryRoutes`);
const subcategoryRoutes = require(`${__dirname}/routes/subcategoryRoutes`);
const brandRoutes = require(`${__dirname}/routes/brandRoutes`);
const productRoutes = require(`${__dirname}/routes/productRoutes`);

const association = require("./models/Association/associationModel");

//Middlewares
app.use(express.json());
app.use("/category", categoryRoutes);
app.use("/subcategory", subcategoryRoutes);
app.use("/brand", brandRoutes);
app.use("/product", productRoutes);
app.use("/homepage", homepageRoutes);

//In case, no route found
app.use("*", (req, res, next) => {
  res.send("page not found");
});

module.exports = app;
