'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdNoFillEvent = sequelize.define('AdNoFillEvent', {
    type: DataTypes.INTEGER,
    timestamp: DataTypes.BIGINT,
    eventId: DataTypes.INTEGER
  }, {});
  AdNoFillEvent.associate = function(models) {
    // associations can be defined here
  };
  return AdNoFillEvent;
};