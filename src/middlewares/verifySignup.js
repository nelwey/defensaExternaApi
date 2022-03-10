const ROLES = ["admin", "usuario"];
const Usuario = require('../models/Usuario');

const checkDuplicateUsername = async (req, res, next) => {

  if (!req.body.nombreUsuario) {
    return res.status(400).json({
      ok: false,
      msg: "Nombre de Usuario es requerido!"
    })
  }

  const usuario = await Usuario.findOne({
    nombreUsuario: req.body.nombreUsuario
  });
  if (usuario) {
    return res.status(400).json({
      ok: false,
      msg: "El usuario ya existe!"
    })
  }
  next();
}

const checkPasswordExist = async (req, res, next) => {
  if (!req.body.password) {
    return res.status(400).json({
      ok: false,
      msg: "Contraseña es requerido!"
    })
  }
  next();
}

const checkRolesExisted = (req, res, next) => {
  const rol = req.body.rol;
  if (!ROLES.includes(rol)) {
    return res.status(400).json({
      ok: false,
      msg: `Rol ${rol} no valido!`
    })
  }
  next();
}

const checkRolesRequired = (req, res, next) => {
  const rol = req.body.rol;
  if (!rol) {
    return res.status(400).json({
      ok: false,
      msg: `Rol es requerido!`
    })
  }
  next();
}

module.exports = {
  checkDuplicateUsername,
  checkPasswordExist,
  checkRolesExisted,
  checkRolesRequired,
}