const Category = require("./../models/categoryModel");
const Subcategory = require("./../models/subCategoryModel");
const Brand = require("./../models/brandModel");

exports.homepage = async (req, res, next) => {
  try {
    let categories = await Category.findAll();
    let brands = await Brand.findAll();
    let subcategoriues = await Subcategory.findAll();

    res
      .status(200)
      .json({ status: true, data: { categories: categories, brands, subcategoriues } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal Error" });
  }
};
