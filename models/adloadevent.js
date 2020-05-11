'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdLoadEvent = sequelize.define('AdLoadEvent', {
    type: DataTypes.INTEGER,
    timestamp: DataTypes.DATE,
    eventId: DataTypes.INTEGER
  }, {});
  AdLoadEvent.associate = function(models) {
    // associations can be defined here
  };
  return AdLoadEvent;
};