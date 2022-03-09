const ctrl = {};
import Mantenimiento from '../models/Mantenimiento';

ctrl.crear = async (req, res) => {
  try {
    const nuevoMantenimiento = new Mantenimiento({
      idSolicitud: req.body.idSolicitud,
      idTipoMantenimiento: req.body.idTipoMantenimiento,
      fechaInicio: req.body.fechaInicio,
      fechaFin: req.body.fechaFin,
      estado: req.body.estado,
      gastos: req.body.gastos,
    });
    const nuevaMantenimientoGuardado = await nuevoMantenimiento.save();

    console.log("Mantenimiento.ctrl >  crear: ", nuevaMantenimientoGuardado);

    return res.status(200).json({
      ok: true,
      msg: "Mantenimiento registrado exitosamente!",
      nuevaMantenimientoGuardado
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
    const mantenimientos = await Mantenimiento.find().populate({
      path: 'idSolicitud',
      populate: {
        path: 'idUEducativa'
      }
    }).populate('idTipoMantenimiento');
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
ctrl.obtenerPorId = async (req, res) => {
  try {
    const mantenimiento = await Mantenimiento.findOne({
      _id: req.params.id
    }).populate('idTipoMantenimiento');
    console.log("Mantenimiento.ctrl >  obtenerPorId: ", mantenimiento);
    return res.status(200).json({
      ok: true,
      mantenimiento
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `El mantenimiento con el id, ${req.params.id} no fue encontrado`,
      error
    });
  }
}
ctrl.obtenerPorTipo = async (req, res) => {

  try {
    const mantenimientos = await Mantenimiento.find({
      idTipoMantenimiento: req.body.idTipoMantenimiento
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
ctrl.obtenerPorIdSolicitud = async (req, res) => {

  try {
    const mantenimientos = await Mantenimiento.find({
      idSolicitud: req.body.idSolicitud
    }).populate('idTipoMantenimiento');
    console.log("Mantenimiento.ctrl >  obtenerPorIdSolicitud: ", mantenimientos);
    return res.status(200).json({
      ok: true,
      mantenimientos
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `Mantenimientos no encontrado!`,
      error
    });
  }
}
ctrl.actualizar = async (req, res) => {
  try {
    const mantenimiento = await Mantenimiento.findById(req.params.id)
    if (mantenimiento === null || mantenimiento === undefined) {
      return res.status(404).json({
        ok: false,
        msg: `El mantenimiento con el id, '${req.params.id}' no fue encontrado`,
      });
    }
    const mantenimientoActualizado = await Mantenimiento.findByIdAndUpdate(req.params.id, {
      idSolicitud: req.body.idSolicitud,
      idTipoMantenimiento: req.body.idTipoMantenimiento,
      fechaInicio: req.body.fechaInicio,
      fechaFin: req.body.fechaFin,
      estado: req.body.estado,
      gastos: req.body.gastos,
    }, {
      new: true
    });

    console.log("Mantenimiento.ctrl >  actualizar: ", mantenimientoActualizado);
    return res.status(200).json({
      ok: true,
      mantenimientoActualizado,
      msg: 'Mantenimiento actualizado exitosamente!'
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
    const mantenimiento = await Mantenimiento.findByIdAndDelete(req.params.id);
    res.status(200).json({
      ok: true,
      msg: `Mantenimiento con id '${mantenimiento._id}' eliminado correctamente! `
    });

    console.log("Mantenimiento.ctrl > actualizar: ", mantenimiento);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Mantenimiento no encontrado!",
      error
    });
  }
}
module.exports = ctrl;