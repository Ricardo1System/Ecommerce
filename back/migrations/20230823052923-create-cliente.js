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
        allowNull: false,
        type: Sequelize.STRING
      },
      apellidos: {
         allowNull: false,
        type: Sequelize.STRING
      },
      pais: {
         allowNull: true,
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
      perfil: {
         allowNull: true,
        type: Sequelize.STRING
      },
      telefono: {
         allowNull: true,
        type: Sequelize.STRING
      },
      genero: {
         allowNull: true,
        type: Sequelize.STRING
      },
      f_nacimiento: {
         allowNull: true,
        type: Sequelize.STRING
      },
      dni: {
         allowNull: true,
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