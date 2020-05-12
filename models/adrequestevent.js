'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdRequestEvent = sequelize.define('AdRequestEvent', {
    timestamp: DataTypes.DATE,
    sessionId: DataTypes.NUMBER
  }, {});
  AdRequestEvent.associate = function(models) {
    // associations can be defined here
  };
  return AdRequestEvent;
};