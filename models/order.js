module.exports = function(sequelize, DataTypes) {
  const order = sequelize.define("order", {
    custName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    orderTotal: {
      type: DataTypes.DECIMAL(10, 2)
    }
  });

  order.associate = models => {
    order.belongsToMany(models.menuItem, {
      through: "orderMenuItem",
      as: "menuItems",
      foreignKey: "orderId"
    });
  };

  return order;
};
