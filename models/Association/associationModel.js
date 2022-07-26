const Category = require("../categoryModel");
const Subcategory = require("../subCategoryModel");
const Product = require("../productModel");
const Brand = require("../brandModel");

//Defining association
oTm(Category, Subcategory);
oTm(Subcategory, Product);
oTm(Brand, Product);

//functions
function oTm(A, B) {
  A.hasMany(B);
  B.belongsTo(A);
}
