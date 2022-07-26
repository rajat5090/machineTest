const Brand = require("./../models/brandModel");

exports.add = async (req, res) => {
  try {
    let { name, image } = req.body;
    if (!name) res.status(400).json({ status: false, message: "name is mandatory field." });
    Brand.create({ name, image });
    res.status(200).json({ status: true, messgae: "Brand added successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal Error" });
  }
};
