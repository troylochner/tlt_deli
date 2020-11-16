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
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    },
    orderStatus: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  order.associate = models => {
    /*order.belongsTo(models.menuItem, {
      through: models.orderMenuItem,
      unique: false,
      foreignKey: {
        name: "orderId",
        unique: false
      }
    });
    order.belongsToMany(models.menuItem, {
      through: models.orderMenuItem , 
      as: "menuItems",
      foreignKey: "orderId"
    });*/
  };

  return order;
};
