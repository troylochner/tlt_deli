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
      defaultValue: 1
    }
  });

  return order;
};
