module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define("Order", {
    item: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    price: {
      type: DataTypes.DECIMAL(10, 2)
    }
  });

  Order.associate = function(models) {
    Order.hasMany(models.tableTop, {
      foreignKey: "idOrder"
    });
  };

  return Order;
};
