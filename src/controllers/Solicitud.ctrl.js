const ctrl = {};
const Solicitud = require('../models/Solicitud'); 

ctrl.crear = async (req, res) => {
  try {
    const nuevaSolicitud = new Solicitud({
      idUEducativa: req.body.idUEducativa,
      fecha: req.body.fecha,
      descripcion: req.body.descripcion,
      estado: req.body.estado,
    });
    const nuevaSolicitudGuardada = await nuevaSolicitud.save();

    console.log("Solicitud.ctrl >  crear: ", nuevaSolicitudGuardada);

    return res.status(200).json({
      ok: true,
      msg: "Solicitud registrada exitosamente!",
      nuevaSolicitudGuardada
    });

  } catch (error) {

    res.status(500).json({
      ok: false,
      msg: "Ha ocurrido un error del lado del servidor!",
      error
    });
  }
}
ctrl.obtener = async (req, res) => {
  try {
    const solicitudes = await Solicitud.find().populate( {
      path:'idUEducativa',
      populate:{path:'idUv'}
    } );
    res.status(200).json({
      ok: true,
      solicitudes
    });
    console.log("Solicitud.ctrl >  obtener: ", solicitudes);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se pudo obtener las solicitudes!",
      error
    });
  }
}
ctrl.obtenerPorId = async (req, res) => {

  try {
    const solicitud = await Solicitud.findOne({
      _id: req.params.id
    }).populate('idUEducativa');
    console.log("Solicitud.ctrl >  obtenerPorId: ", solicitud);
    return res.status(200).json({
      ok: true,
      solicitud
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `La solicitud con el id, ${req.params.id} no fue encontrada`,
      error
    });
  }
}
ctrl.obtenerPorUE = async (req, res) => {

  try {
    const solicitudes = await Solicitud.find({
      idUEducativa: req.body.idUEducativa
    }).populate('idUEducativa');
    console.log("Solicitud.ctrl >  obtenerPorUE: ", solicitudes);
    return res.status(200).json({
      ok: true,
      solicitudes
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `solicitudes no encontradas`,
      error
    });
  }
}
ctrl.obtenerPorEstado = async (req, res) => {

  try {
    const solicitudes = await Solicitud.find({
      estado: req.body.estado
    }).populate('idUEducativa');
    console.log("Solicitud.ctrl >  obtenerPorEstado: ", solicitudes);
    return res.status(200).json({
      ok: true,
      solicitudes
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `solicitudes no encontradas`,
      error
    });
  }
}
ctrl.actualizar = async (req, res) => {
  try {
    const solicitud = await Solicitud.findById(req.params.id)
    if (solicitud === null || solicitud === undefined) {
      return res.status(404).json({
        ok: false,
        msg: `La solicitud con el id, '${req.params.id}' no fue encontrada`,
      });
    }
    const solicitudActualizada = await Solicitud.findByIdAndUpdate(req.params.id, {
      idUEducativa: req.body.idUEducativa,
      fecha: req.body.fecha,
      descripcion: req.body.descripcion,
      estado: req.body.estado,
    }, {
      new: true
    });

    console.log("Solicitud.ctrl >  actualizar: ", solicitudActualizada);
    return res.status(200).json({
      ok: true,
      solicitudActualizada,
      msg: 'Solicitud actualizada exitosamente!'
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `No se envió ningún payload para actualizar`,
      error
    });
  }
}
ctrl.eliminar = async (req, res) => {
  try {
    const solicitud = await Solicitud.findByIdAndDelete(req.params.id);
    res.status(200).json({
      ok: true,
      msg: `Solicitud con id '${solicitud._id}' eliminada correctamente! `
    });

    console.log("Solicitud.ctrl > actualizar: ", solicitud);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Solicitud no encontrada!",
      error
    });
  }
}
module.exports = ctrl;