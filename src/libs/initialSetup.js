const Rol = require('../models/Rol');

const crearRoles = async () => {
  try {

    const count = await Rol.estimatedDocumentCount();
    if (count > 0) {
      return;
    }
    const values = await Promise.all([
      new Rol({
        nombreRol: 'admin'
      }).save(),
      new Rol({
        nombreRol: 'usuario'
      }).save()
    ]);

  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  crearRoles
}