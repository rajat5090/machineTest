const Category = require("./../models/categoryModel");

exports.add = async (req, res) => {
  try {
    let { name, priority, image, status } = req.body;
    if (!name || !priority)
      res.status(400).json({ status: false, message: "Category name and priority are mandatory." });
    Category.create({ name, priority, image, status });
    res.status(200).json({ status: true, messgae: "Category added successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal Error" });
  }
};
