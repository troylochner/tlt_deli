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
    mobile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    orderTotal: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0
    },
    orderStatus: {
      type: DataTypes.STRING,
      defaultValue: "New"
    }
  });

  return order;
};
