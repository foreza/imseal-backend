'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AdLoadEvents', [
      {
        'type': 1,
        'event_id': 1,    // This is typically inserted by the server
        'timestamp': new Date().getTime()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AdLoadEvents', null, {});
  }
};
