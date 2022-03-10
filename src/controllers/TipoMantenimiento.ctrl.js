const ctrl = {};
const TipoMantenimiento = require('../models/TipoMantenimiento'); 

ctrl.crear = async (req, res) => {
  try {

    const {
      nombre,
    } = req.body;

    //verificar tipoMantenimiento duplicado
    const tipoMantenimientoDuplicado = await TipoMantenimiento.findOne({
      nombre
    });
    if (tipoMantenimientoDuplicado) {
      return res.status(400).json({
        ok: false,
        msg: "Tipo de Mantenimiento ya existe!"
      });
    }

    const nuevoTipoMantenimiento = new TipoMantenimiento({
      nombre: req.body.nombre
    });
    const nuevoTipoMantenimientoGuardado = await nuevoTipoMantenimiento.save();

    console.log("TipoMantenimiento.ctrl >  crear: ", nuevoTipoMantenimientoGuardado);

    return res.status(200).json({
      ok: true,
      msg: "Tipo de mantenimiento registrado exitosamente!",
      nuevoTipoMantenimientoGuardado
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
    const tipoMantenimientos = await TipoMantenimiento.find();
    res.status(200).json({
      ok: true,
      tipoMantenimientos
    });
    console.log("TipoMantenimiento.ctrl > obtener: ", tipoMantenimientos);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se pudo obtener los tipos de mantenimiento!",
      error
    });
  }
}
ctrl.obtenerPorId = async (req, res) => {

  try {
    const tipoMantenimiento = await TipoMantenimiento.findOne({
      _id: req.params.id
    });
    console.log("TipoMantenimiento.ctrl > obtenerPorId: ", tipoMantenimiento);
    return res.status(200).json({
      ok: true,
      tipoMantenimiento
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `El tipo de mantenimiento con el id, ${req.params.id} no fue encontrado`,
      error
    });
  }
}
ctrl.actualizar = async (req, res) => {
  try {
    const tipoMantenimiento = await TipoMantenimiento.findById(req.params.id)
    const tipoMantenimientoNameDuplicated = await TipoMantenimiento.findOne({
      nombre: req.body.nombre
    })
    if (tipoMantenimiento === null || tipoMantenimiento === undefined) {
      return res.status(404).json({
        ok: false,
        msg: `El tipo de mantenimiento con el id, '${req.params.id}' no fue encontrado`,
      });
    }
    if (tipoMantenimientoNameDuplicated) {
      return res.status(404).json({
        ok: false,
        msg: `Ya existe un tipo de Mantenimiento con ese nombre!`,
      });
    }
    const tipoMantenimientoActualizado = await TipoMantenimiento.findByIdAndUpdate(req.params.id, {
      nombre: req.body.nombre,
    }, {
      new: true
    });

    console.log("TipoMantenimiento.ctrl > actualizar: ", tipoMantenimientoActualizado);
    return res.status(200).json({
      ok: true,
      tipoMantenimientoActualizado,
      msg: 'Tipo de mantenimiento actualizado exitosamente!'
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
    const tipoMantenimiento = await TipoMantenimiento.findByIdAndDelete(req.params.id);
    res.status(200).json({
      ok: true,
      msg: `Tipo de mantenimiento '${tipoMantenimiento.nombre}' eliminado correctamente! `
    });

    console.log("TipoMantenimiento.ctrl > actualizar: ", tipoMantenimiento);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Tipo de mantenimiento no encontrada!",
      error
    });
  }
}
module.exports = ctrl;