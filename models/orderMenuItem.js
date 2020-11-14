const menuItem = require("./menuItem.js");
const order = require("./order.js");

module.exports = function(sequelize, DataTypes) {
  const orderMenuItem = sequelize.define("orderMenuItem", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    menuItemId: {
      type: DataTypes.INTEGER,
      //unique: false,
      references: {
        model: menuItem,
        key: "id"
      }
    },
    orderId: {
      type: DataTypes.INTEGER,
      //unique: false,
      references: {
        model: order,
        key: "id"
      }
    }
  });
  orderMenuItem.associate = function(models) {
    orderMenuItem.belongsTo(models.order, {
      through: models.order,
      unique: false
    });
  };

  return orderMenuItem;
};
