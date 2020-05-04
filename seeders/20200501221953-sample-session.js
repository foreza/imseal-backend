'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Sessions', [{
          'device_id': '123456789',  
          'isActive': true,
          'cellular': false,
          'os': 'Android',
          'placement_id' : '380000',
          'request_ip': '45.51.123.12',
          'continent': 'North America',
          'country': 'United States',
          'region': 'California',
          'city': 'Santa Monica',
          'lat': 0.0,
          'long': -0.0,
          'createdAt': new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sessions', null, {});
  }
};
