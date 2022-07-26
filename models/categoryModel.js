//Importing modules
const { DataTypes } = require("sequelize");
const sequelize = require(`${__dirname}/../DB/sequelize`);
//Creating model
const Category = sequelize.define(
  "Category",
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
    image: {
      type: DataTypes.STRING,
    },
    //which to show on top
    priority: {
      type: DataTypes.INTEGER,
    },
    //whether its active or not
    status: { type: DataTypes.INTEGER, defaultValue: 1 },
  },

  {
    tableName: "categories",
  }
);

module.exports = Category;
