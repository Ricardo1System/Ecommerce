'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: true,
        type: Sequelize.STRING
      },
      apellidos: {
         allowNull: true,
        type: Sequelize.STRING
      },
      pais: {
         allowNull: false,
        type: Sequelize.STRING
      },
      email: {
         allowNull: true,
        type: Sequelize.STRING
      },
      password: {
         allowNull: true,
        type: Sequelize.STRING
      },
      perfil: {
         allowNull: true,
        type: Sequelize.STRING
      },
      telefono: {
         allowNull: false,
        type: Sequelize.STRING
      },
      genero: {
         allowNull: false,
        type: Sequelize.STRING
      },
      f_nacimiento: {
         allowNull: false,
        type: Sequelize.STRING
      },
      dni: {
         allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
};