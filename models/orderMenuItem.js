//const menuItem = require("./menuItem.js");
//const order = require("./order.js");

module.exports = function(sequelize, DataTypes) {
  const orderMenuItem = sequelize.define("orderMenuItem", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    } /*,
    menuItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "menuItem",
        key: "id"
      }
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "order",
        key: "id"
      }
    }*/,
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemSubtotal: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    }
  });
  return orderMenuItem;
};
