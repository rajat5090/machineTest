//Importing modules
const { DataTypes } = require("sequelize");
const sequelize = require(`${__dirname}/../DB/sequelize`);

//Creating model
const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: { type: DataTypes.INTEGER, defaultValue: 1 },
  },

  {
    tableName: "products",
  }
);

//Syncronization of model with existing table
(async () => {
  await Product.sync();
})();

module.exports = Product;
