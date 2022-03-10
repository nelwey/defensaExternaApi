const ctrl = {};
const Log = require('../models/Log');

ctrl.crear = async (req, res) => {
  try {
    const nuevoLog = new Log({
      idUsuario: req.body.idUsuario,
      nombre: req.body.nombre,
      metodo: req.body.metodo,
      query: req.body.query,
    });

    console.log(nuevoLog);
    const nuevoLogGuardado = await nuevoLog.save();
    console.log(nuevoLogGuardado);
    console.log("Mantenimiento.ctrl >  crear: ", nuevoLogGuardado);

    return res.status(200).json({
      ok: true,
      msg: "Log registrado exitosamente!",
      nuevoLogGuardado
    });

  } catch (error) {

    res.status(500).json({
      ok: false,
      msg: "Ha ocurrido un error del lado del servidor!",
      error
    });
  }
}
module.exports = ctrl;