const Subcategory = require("../models/subCategoryModel");
const Category = require("./../models/categoryModel");

exports.add = async (req, res) => {
  try {
    let { name, priority, status, CategoryId } = req.body;
    if (!name || !priority)
      return res
        .status(400)
        .json({ status: false, message: "name, priority and categoryId are mandatory." });
    let isExist = await Category.findOne({ id: CategoryId });
    if (!isExist) return res.status(400).json({ status: false, message: "category not exist" });
    Subcategory.create({ name, priority, status, CategoryId });
    res.status(200).json({ status: true, messgae: "Subcategory added successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal Error" });
  }
};
