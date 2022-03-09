const ctrl = {};
import Uv from '../models/Uv';

ctrl.crear = async (req, res) => {
  try {
    const {
     nombre,
     distrito
    } = req.body;
    if (nombre,distrito) {

      //verificar paciente duplicado
      const uvDuplicado = await Uv.findOne({nombre});
      if (uvDuplicado) {
        return res.status(400).json({
          ok: false,
          msg: "error: uvDuplicado"
        });
      }

      const uvNuevo = new Uv({
       nombre,distrito
      });

      //guardar paciente
      const uvCreado = await uvNuevo.save();
      console.log("Uv.ctrl > crear: ", uvCreado);

      return res.status(200).json({
        ok: true,
        msg: "Uv creado exitosamente!",
        uvCreado
      });

    } else {
      return res.status(500).json({
        ok: false,
        msg: "Todos los campos son requeridos!"
      });
    }

  } catch (error) {

    res.status(500).json({
      ok: false,
      msg: "Ha ocurrido un error del lado del servidor!"
    })
    console.log("Uv.ctrl > crear > error: ", error);
  }
}
ctrl.obtener = async (req, res) => {
  try {
    const uvs = await Uv.find();
    res.status(200).json({
      ok: true,
      uvs
    });
    console.log("Uv.ctrl > obtener: ", uvs);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Ha ocurrido un error del lado del servidor!"
    })
  }
}
ctrl.obtenerPorId = async (req, res) => {

  try {
    const uv = await Uv.findOne({
      _id: req.params.id
    });
    console.log("Uv.ctrl > obtenerPorId: ", paciente);
    return res.status(200).json({
      ok: true,
      uv
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: `El Uv con el id, ${req.params.id} no fue encontrado`,
      error
    })
  }
}
ctrl.actualizar = async (req, res) => {
  try {

    //validar si existe ese paciente
    const uv = await Uv.findById(req.params.id)
    if (uv === null || uv === undefined) {
      return res.status(404).json({
        ok: false,
        msg: `El uv con el id, '${req.params.id}' no fue encontrado`,
      });
    }

    const uvActualizado = await Uv.findByIdAndUpdate(req.params.id, {
      nombre: req.body.nombre,
      distrito: req.body.distrito
    }, {
      new: true
    });

    console.log("Uv.ctrl > actualizar: ", uvActualizado);
    return res.status(200).json({
      ok: true,
      uvActualizado,
      msg: 'Uv actualizado exitosamente!'
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Ha ocurrido un error del lado del servidor!",
      error
    });
  }
}
ctrl.eliminar = async (req, res) => {
  try {
    const uv = await Uv.findByIdAndDelete(req.params.id);
    res.status(200).json({
      ok: true,
      msg: `Uv '${uv.nombre}' eliminado correctamente! `
    });

    console.log("Uv.ctrl > eliminar: ", uv);
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Uv no encontrado!",
      error
    });
  }
}


module.exports = ctrl;