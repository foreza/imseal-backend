'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdRequestEvent = sequelize.define('AdRequestEvent', {
    type: DataTypes.NUMBER,
    timestamp: DataTypes.DATE,
    sessionId: DataTypes.NUMBER
  }, {});
  AdRequestEvent.associate = function(models) {
    // associations can be defined here
  };
  return AdRequestEvent;
};