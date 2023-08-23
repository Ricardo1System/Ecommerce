'use strict'

var express =require('express');
var app =express();
var bodyparse= require('body-parser');
// var mongoose=require('mongoose');
var mysql = require('mysql2');
var port=process.env.port||4201;

// Configuración de MySQL
var connection = mysql.createConnection({
    host: 'localhost',  // Cambia esto a la dirección de tu servidor MySQL
    port: 3306, // Agregamos el puerto 3306 aquí
    user: 'root',   // Cambia esto al nombre de usuario de tu base de datos
    password: '123qwe',   // Cambia esto a la contraseña de tu base de datos
    database: 'tienda'  // Cambia esto al nombre de tu base de datos
  });

  connection.connect(function(err) {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
    app.listen(port,function () {
        console.log('Servidor corriendo en el puerto ' + port);
    });
  });


  module.exports=app;