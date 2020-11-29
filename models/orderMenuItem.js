module.exports = function(sequelize, DataTypes) {
  const orderMenuItem = sequelize.define("orderMenuItem", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    } /*,
    itemSubtotal: {
      type: DataTypes.DECIMAL(10, 2)
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    menuItemId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    itemName: {
      type: DataTypes.STRING,
      allowNull: false
    }*/
  });

  orderMenuItem.associate = function(models) {
    orderMenuItem.belongsTo(models.order);
    orderMenuItem.belongsTo(models.menuItem);
  };

  return orderMenuItem;
};
