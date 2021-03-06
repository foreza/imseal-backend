'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AdRequestEvents', [
      {
        'session_id': 1,
        'timestamp': new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AdRequestEvents', null, {});
  }
};
