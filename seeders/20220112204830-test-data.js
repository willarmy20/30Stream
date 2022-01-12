'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //Users is the table that was created in beekeeper
    await queryInterface.bulkInsert('Users', [
    {
      name: 'Admin User',
      password: '12345',
      email: 'admin@admin.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
