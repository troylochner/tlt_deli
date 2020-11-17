const tableTop = require("./tableTop.js");
const order = require("./order.js");

module.exports = function(sequelize, DataTypes) {
  const tableTopOrder = sequelize.define("tableTopOrder", {
    tableTopId: {
      type: DataTypes.INTEGER,
      references: {
        model: tableTop,
        key: "id"
      }
    },
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: order,
        key: "id"
      }
    }
  });

  return tableTopOrder;
};
