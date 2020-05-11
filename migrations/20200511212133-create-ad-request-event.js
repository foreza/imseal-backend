'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AdRequestEvents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      timestamp: {
        allowNull: false,
        type: Sequelize.DATE
      },
      session_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sessions',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AdRequestEvents');
  }
};