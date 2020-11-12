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

  order.associate = function(models) {
    order.hasMany(models.tableTop, {
      foreignKey: "idOrder"
    });
  };

  return order;
};
