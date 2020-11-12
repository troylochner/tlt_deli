module.exports = function(sequelize, DataTypes) {
  const orderMenuItem = sequelize.define("orderMenuItem", {
    orderName: {
      type: DataTypes.STRING
    }
  });

  return orderMenuItem;
};
