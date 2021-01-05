'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // add a column named profile_pic to User table
    await queryInterface.addColumn(
      'Users', // first arg is table name
               // table names are automatically pluralized
               // (this is a convention in SQL)
      'profile_pic', // second arg is new column name
      {
        type: Sequelize.STRING
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // remove a column named profile_pic from User table
    await queryInterface.removeColumn('Users', 'profile_pic');
  }
};
