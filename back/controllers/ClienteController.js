'use strict'

const { Cliente } = require('../models');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../helpers/jwt');

const registro_cliente = async function (req, res) {
  try {
    const data = req.body;
    var clientes = await Cliente.findAll({
      where: {
        email: data.email
      }
    });
    if (clientes.length == 0) {
      if (data.password) {
        bcrypt.hash(data.password, null, null, async function (err, hash) {
          if (hash) {
            data.password = hash
            const newCliente = await Cliente.create(data);
            res.status(201).json(newCliente);
          }else{
            res.status(201).json({ message: 'ErrorServer', data: undefined });
          }
        })
      } else {
        res.status(201).json({ message: 'Falta una contraseña', data: undefined });
      }
    } else {
      // console.log(clientes[0]);
      res.status(201).json({ message: 'El correo ya existe', data: undefined });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el cliente.' });
  }
};


const login_cliente = async function (req , res) {
  var data=req.body;
  var clientes=await Cliente.findAll({where:{
    email:data.email
  }});
  if (clientes.length==0) {
    res.status(200).send({message:'No se encontro el correo',data:undefined});

  } else {
    let user=clientes[0];
    bcrypt.compare(data.password,user.password,async function(error,check){
      if (check) {
        res.status(200).send({data:user,token:jwt.createToken(user)});
      } else {
        res.status(200).send({message:'La contraseña no coincide',data:undefined});
      }
    });
    
    // res.status(200).send({data:user})
  }
};

module.exports = {
  registro_cliente,
  login_cliente
}