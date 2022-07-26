const Category = require("../models/categoryModel");
const Product = require("../models/productModel");
const Subcategory = require("../models/subCategoryModel");

exports.add = async (req, res) => {
  try {
    let { name, status, SubcategoryId, BrandId } = req.body;
    if (!name || !SubcategoryId || !BrandId)
      res
        .status(400)
        .json({ status: false, message: "Subategory name, status,BrandID are mandatory." });
    Product.create({ name, SubcategoryId, BrandId, status });
    res.status(200).json({ status: true, messgae: "Product added successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal Error" });
  }
};

exports.get = async (req, res) => {
  try {
    let products = await Product.findAll();
    res.status(200).json({ status: true, data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal Error" });
  }
};

exports.getByBrands = async (req, res) => {
  try {
    let brandId = req.params.brandId;
    console.log(req.params);
    let products = await Product.findAll({ where: { BrandId: brandId } });
    res.status(200).json({ status: true, data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal Error" });
  }
};

exports.getByCategory = async (req, res) => {
  try {
    let categoryId = req.params.categoryId;
    let isExist = await Subcategory.findAll({
      where: { CategoryId: categoryId },
      attributes: ["id"],
    });
    if (!isExist) {
      res.status(200).json({ status: true, data: [] });
    }

    let subIds = isExist.map((data) => data.id);

    let products = await Product.findAll({ where: { SubcategoryId: subIds } });
    res.status(200).json({ status: true, data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal Error" });
  }
};

exports.getBySubcategory = async (req, res) => {
  try {
    let subId = req.params.subId;
    let isExist = await Subcategory.findOne({
      where: { id: subId },
      attributes: ["id"],
    });
    if (!isExist) {
      res.status(200).json({ status: true, data: [] });
    }
    let products = await Product.findAll({ where: { SubcategoryId: isExist.id } });
    res.status(200).json({ status: true, data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal Error" });
  }
};
