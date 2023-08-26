'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Admins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombres: {
         allowNull: false,
        type: Sequelize.STRING
      },
      apellidos: {
         allowNull: false,
        type: Sequelize.STRING
      },
      email: {
         allowNull: false,
        type: Sequelize.STRING
      },
      password: {
         allowNull: false,
        type: Sequelize.STRING
      },
      dni: {
         allowNull: false,
        type: Sequelize.STRING
      },
      rol: {
         allowNull: false,
        type: Sequelize.STRING
      },
      telefono: {
         allowNull: false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Admins');
  }
};