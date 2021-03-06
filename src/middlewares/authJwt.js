const jwt = require('jsonwebtoken');
const config = require('../config');
const Usuario = require('../models/Usuario');
const Rol = require('../models/Rol');

const verifyToken = async (req, res, next) => {

  try {

    //verificar si hay token, la variable se llama token
    const token = req.headers["token"];
    if (!token) {
      return res.status(403).json({
        ok: false,
        msg: 'Token es requerido'
      })
    }

    //verificar si es token valido
    const decoded = jwt.verify(token, 'secret');
    req.usuarioId = decoded.id;
    const usuario = await Usuario.findById(req.usuarioId, {
      password: 0
    })

    next();

  } catch (error) {
    res.status(401).json({
      ok: false,
      msg: "Token invalido"
    })
  }
}
const isUsuario = async (req, res, next) => {
  try {

    //traer roles de usuario
    const usuario = await Usuario.findById(req.usuarioId);
    const rol = await Rol.findById(usuario.rol)
    //validar rol admin
    if (rol.nombreRol === "usuario" || rol.nombreRol === "admin") {
      next();
      return;
    }

    return res.status(403).json({
      ok: false,
      msg: "Rol de admin es requerido!"
    });

  } catch (error) {

    res.status(404).json({
      ok: false,
      msg: "Ha ocurrido un error del lado del servidor!"
    });

  }
}
const isAdmin = async (req, res, next) => {
  try {

    //traer roles de usuario
    const usuario = await Usuario.findById(req.usuarioId);
    const rol = await Rol.findById(usuario.rol)
    //validar rol admin
    if (rol.nombreRol === "admin") {
      next();
      return;
    }

    return res.status(403).json({
      ok: false,
      msg: "Rol de admin es requerido!"
    });

  } catch (error) {

    res.status(404).json({
      ok: false,
      msg: "Ha ocurrido un error del lado del servidor!"
    });

  }
}

module.exports = {
  verifyToken,
  isUsuario,
  isAdmin,
}