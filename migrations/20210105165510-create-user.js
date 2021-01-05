'use strict';
module.exports = {
  // "up" tells Postgres how to set up the table
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      // also available: UUID
      // Universally Unique ID
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      name: {
        type: Sequelize.STRING
      },
      hash: {
        type: Sequelize.STRING
      },
      account_number: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // "down" tells Postgres how to tear down the table
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};