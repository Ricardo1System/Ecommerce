'use strict'

var express =require('express');
var app =express();
const bodyParser = require('body-parser');
// var mongoose=require('mongoose');
var mysql = require('mysql2');
var port=process.env.port||4201;

var cliente_route=require('./routes/cliente');
var admin_route=require('./routes/admin');

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

  app.use(bodyParser.urlencoded({
    extended:true
  }));

  app.use(bodyParser.json({
    limit:'50mb',
    extended:true
  }))

  app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

  app.use('/api',cliente_route)
  app.use('/api',admin_route)

  module.exports=app;