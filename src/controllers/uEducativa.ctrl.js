const ctrl = {};
const UEducativa = require('../models/UEducativa');

ctrl.crear = async (req, res) => {
  try {

    const {
      nombre,
      idUv
    } = req.body;

    //verificar uEducativa duplicado
    const uEducativaDuplicado = await UEducativa.findOne({
      nombre,
      idUv: idUv
    });
    if (uEducativaDuplicado) {
      return res.status(400).json({
        ok: false,
        msg: "Ya existe una unidad Educativa con ese nombre en la base de datos!"
      });
    }

    const nuevouEducativa = new UEducativa({
      idUv: req.body.idUv,
      nombre: req.body.nombre,
      ubicacion: req.body.ubicacion,
      telefono: req.body.telefono,
      email: req.body.email,
    });



    const uEducativaGuardado = await nuevouEducativa.save();

    console.log("uEducativa.ctrl >  crear: ", uEducativaGuardado)

    return res.status(200).json({
      ok: true,
      msg: "Unidad Educativa registrado exitosamente!",
      uEducativaGuardado
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
    const uEducativas = await UEducativa.find().populate('idUv');
    res.status(200).json({
      ok: true,
      uEducativas
    });
    console.log("uEducativa.ctrl > obtener: ", uEducativas);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se pudo obtener las Unidades Educativas!",
      error
    });
  }
}
ctrl.obtenerPorUV = async (req, res) => {
  const {
    idUv,
  } = req.body;
  try {
    const uEducativas = await UEducativa.find({
      idUv
    }).populate('idUv');
    res.status(200).json({
      ok: true,
      uEducativas
    });
    console.log("uEducativa.ctrl > obtenerPorUV: ", uEducativas);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "No se pudo obtener las Unidades Educativas!",
      error
    });
  }
}
ctrl.obtenerPorId = async (req, res) => {

  try {
    const uEducativa = await UEducativa.findOne({
      _id: req.params.id
    }).populate('idUv');
    console.log("uEducativa.ctrl > obtenerPorId: ", uEducativa);
    return res.status(200).json({
      ok: true,
      uEducativa
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `La unidad educativa con el id, ${req.params.id} no fue encontrada`,
      error
    });
  }
}
ctrl.actualizar = async (req, res) => {
  try {
    const uEducativaExistente = await UEducativa.findById(req.params.id)
    if (uEducativaExistente === null || uEducativaExistente === undefined) {
      return res.status(404).json({
        ok: false,
        msg: `La unidad educativa con el id, '${req.params.id}' no fue encontrada`,
      });
    }
    const uEducativaActualizado = await UEducativa.findByIdAndUpdate(req.params.id, {
      idUv: req.body.idUv,
      nombre: req.body.nombre,
      ubicacion: req.body.ubicacion,
      telefono: req.body.telefono,
      email: req.body.email,
    }, {
      new: true
    });

    console.log("uEducativa.ctrl > actualizar: ", uEducativaActualizado);
    return res.status(200).json({
      ok: true,
      uEducativaActualizado,
      msg: 'unidad educativa actualizada exitosamente!'
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
    const uEducativa = await UEducativa.findByIdAndDelete(req.params.id);
    res.status(200).json({
      ok: true,
      msg: `Unidad educativa '${uEducativa.nombre}' eliminado correctamente! `
    });

    console.log("uEducativa.ctrl > eliminar: ", uEducativa);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Unidad Educativa no encontrada!",
      error
    });
  }
}


module.exports = ctrl;