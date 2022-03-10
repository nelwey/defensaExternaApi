const ctrl = {};
const Mantenimiento = require('../models/Mantenimiento');

ctrl.obtenerMantenimientos = async (req, res) => {
  const {
    idSolicitud
  } = req.body

  try {
    const mantenimientos = await Mantenimiento.find({
      idSolicitud
    }).populate({
      path: 'idSolicitud',
      populate: {
        path: 'idUEducativa'
      }
    }).populate('idTipoMantenimiento');;
    res.status(200).json({
      ok: true,
      mantenimientos
    });
    console.log("Mantenimiento.ctrl >  obtener: ", mantenimientos);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se pudo obtener los mantenimientos!",
      error
    });
  }
}
ctrl.obtenerPorTipo = async (req, res) => {
  var year = req.body.fechaFin.substring(0, 4);
  try {
    const mantenimientos = await Mantenimiento.find({
      idTipoMantenimiento: req.body.idTipoMantenimiento,
      "fechaFin": {
        "$regex": year,
        "$options": "i"
      },
      estado: req.body.estado

    }).populate('idTipoMantenimiento').populate({
      path: 'idSolicitud',
      populate: {
        path: 'idUEducativa'
      }
    });
    console.log("Mantenimiento.ctrl >  obtenerPorTipo: ", mantenimientos);
    return res.status(200).json({
      ok: true,
      mantenimientos
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `Mantenimientos no encontrados!`,
      error
    });
  }
}

module.exports = ctrl;