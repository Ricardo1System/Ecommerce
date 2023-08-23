'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cliente.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    pais: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    perfil: DataTypes.STRING,
    telefono: DataTypes.STRING,
    genero: DataTypes.STRING,
    f_nacimiento: DataTypes.STRING,
    dni: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};