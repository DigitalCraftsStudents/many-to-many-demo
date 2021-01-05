'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
    */
   await queryInterface.bulkInsert('Users', [
     {
       name: 'John Snow',
       username: 'knows_nothing',
       hash: 'abc123',
       account_number: '5',
       profile_pic: 'default.png',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
