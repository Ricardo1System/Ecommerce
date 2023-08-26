'use strict'

const { Admin } = require('../models');
const bcrypt = require('bcrypt-nodejs');

const registro_admin = async function (req, res) {
  try {
    const data = req.body;
    var Admins = await Admin.findAll({
      where: {
        email: data.email
      }
    });
    if (Admins.length == 0) {
      if (data.password) {
        bcrypt.hash(data.password, null, null, async function (err, hash) {
          if (hash) {
            data.password = hash
            const newCliente = await Admin.create(data);
            res.status(201).json(newCliente);
          }else{
            res.status(201).json({ message: 'ErrorServer', data: undefined });
          }
        })
      } else {
        res.status(201).json({ message: 'Falta una contraseña', data: undefined });
      }
    } else {
      res.status(201).json({ message: 'El correo ya existe', data: undefined });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el cliente.' });
  }
}

module.exports = {
    registro_admin
}