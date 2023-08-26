'use strict'

var jwt=require('jwt-simple');
var moment=require('moment');
var secret='ricardoTienda';

exports.createToken=function(user){
    var payload={
        sub: user.id,
        nombres: user.nombres,
        apellido:user.apellidos,
        email:user.email,
        iat:moment().unix(),
        exp:moment().add(7,'days').unix()
    }
    return jwt.encode(payload,secret)
}