//Importing modules
const { DataTypes } = require("sequelize");
const sequelize = require(`${__dirname}/../DB/sequelize`);

//Creating model
const Subcategory = sequelize.define(
  "Subcategory",
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
    //which to show on top
    priority: {
      type: DataTypes.INTEGER,
    },
    //whether its active or not
    status: { type: DataTypes.INTEGER, defaultValue: 1 },
  },

  {
    tableName: "subcategories",
  }
);

module.exports = Subcategory;
