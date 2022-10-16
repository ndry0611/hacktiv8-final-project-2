'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [
    {
      full_name: "Andry",
      email: "andry@gmail.com",
      username: 'andry',
      password: '123456',
      profile_image_url: 'https://picsum.photos/id/1/200/200',
      age: 19,
      phone_number: 12345,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      full_name: "Resa Auliana Risyan",
      email: "resarisyan@gmail.com",
      username: 'resarisyan',
      password: '123456',
      profile_image_url: 'https://picsum.photos/id/2/200/200',
      age: 19,
      phone_number: 12345,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
