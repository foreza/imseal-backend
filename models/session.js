'use strict';
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    device_id: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    cellular: DataTypes.BOOLEAN,
    os: DataTypes.STRING,
    placement_id: DataTypes.STRING,
    request_ip: DataTypes.STRING,
    continent: DataTypes.STRING,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    city: DataTypes.STRING,
    lat: DataTypes.NUMBER,
    long: DataTypes.NUMBER
  }, {});
  Session.associate = function(models) {
    // associations can be defined here
  };
  return Session;
};