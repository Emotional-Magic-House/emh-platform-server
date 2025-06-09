const { Sequelize, DataTypes } = require("sequelize");

function createCounterModule(sequelize) {
  const Counter = sequelize.define("Counter", {
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  });
  
  return Counter;
}

module.exports = {
  createCounterModule
}