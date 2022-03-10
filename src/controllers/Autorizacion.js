const ctrl = {};
const Usuario = require('../models/Usuario'); 
const jwt = require('jsonwebtoken'); 
const config = require('../config'); 

ctrl.iniciarSesion = async (req, res) => {

  
  try {

    //validando nombreUsuario
    const usuarioEncontrado = await Usuario.findOne({
      nombreUsuario: req.body.nombreUsuario
    }).populate("rol");

    if (!usuarioEncontrado) {
      throw Error(JSON.stringify({
        msg: 'Nombre de usuario no existe!'
      }));
    }
    //validando contraseña
    const matchPassword = await Usuario.comparePassword(req.body.password, usuarioEncontrado.password)
    if (!matchPassword) {
      throw Error(JSON.stringify({
        msg: 'Contraseña incorrecta!'
      }));
    } else {
      //crando token
      const token = jwt.sign({
        id: usuarioEncontrado._id,
        rol: usuarioEncontrado.rol
      }, 'secret', {
        expiresIn: 86400
      })
      res.status(200).json({
        ok: true,
        msg: `Bienvenido(a) al sistema, ${usuarioEncontrado.nombreUsuario}!`,
        rol: usuarioEncontrado.rol,
        idUsuario: usuarioEncontrado._id,
        token
      });
    }
  } catch (error) {
    res.status(500).json(JSON.parse(error.message).msg)
    console.error("[>] Autorizacion.js, iniciarSesion: ", JSON.parse(error.message).msg)
  }
}
ctrl.cerrarSesion = async (req, res) => {

  res.status(200).json({
    ok: true,
    msg: "Has cerrado sesión!",
    token: ""
  });
  console.log("[>] Autorizacion.js, cerrarSesion: ")

}



module.exports = ctrl;