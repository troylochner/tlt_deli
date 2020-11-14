//const menuItem = require("./menuItem.js");
//const order = require("./order.js");

module.exports = function(sequelize, DataTypes) {
  const orderMenuItem = sequelize.define("orderMenuItem", {
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
    }
  });
  return orderMenuItem;
};
