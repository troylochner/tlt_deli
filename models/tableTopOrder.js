module.exports = function(sequelize, DataTypes) {
  const tableTopOrder = sequelize.define("tableTopOrder", {
    partyName: {
      type: DataTypes.STRING
    }
  });

  return tableTopOrder;
};
