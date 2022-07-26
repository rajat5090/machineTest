//Importing modules
const { DataTypes } = require("sequelize");
const sequelize = require(`${__dirname}/../DB/sequelize`);

//Creating model
const Brand = sequelize.define(
  "Brand",
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
    image: DataTypes.STRING,
  },

  {
    tableName: "brands",
  }
);

module.exports = Brand;
