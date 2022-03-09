"use strict";

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var _Rol = _interopRequireDefault(require("../models/Rol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ctrl = {};

ctrl.crear = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("crear paciente prro"); // try {
          //   const {
          //     nombreUsuario,
          //     password,
          //     rol
          //   } = req.body;
          //   var rolObject = await Rol.findOne({
          //     nombreRol: rol
          //   })
          //   const nuevoUsuario = new Usuario({
          //     nombreUsuario,
          //     password: await Usuario.encryptPassword(password),
          //     rol: rolObject._id
          //   })
          //   //guardar usuario
          //   const usuarioGuardado = await nuevoUsuario.save();
          //   console.log("[>] Usuario.ctrl, crear: ", usuarioGuardado)
          //   res.status(200).json({
          //     ok: true,
          //     msg: "Usuario creado exitosamente!"
          //   });
          // } catch (error) {
          //   res.status(500).json({
          //     ok: false,
          //     msg: "Ha ocurrido un error del lado del servidor!"
          //   })
          //   console.log("[>] Usuario.ctrl, crear: ", error)
          // }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}; // ctrl.obtener = async (req, res) => {
//   try {
//     const usuarios = await Usuario.find().populate('rol');
//     res.status(200).json({
//       ok: true,
//       usuarios
//     });
//     console.log("[>] Usuario.ctrl, obtener: ", usuarios);
//   } catch (error) {
//     res.status(500).json({
//       ok: false,
//       msg: "Ha ocurrido un error del lado del servidor!"
//     })
//   }
// }
// ctrl.obtenerPorId = async (req, res) => {
//   try {
//     const usuario = await Usuario.findOne({
//       _id: req.params.id
//     });
//     res.status(200).json({
//       ok: true,
//       usuario
//     });
//     console.log("[>] Usuario.ctrl, obtenerPorId: ", usuario);
//   } catch (error) {
//     res.status(500).json({
//       ok: false,
//       msg: "Ha ocurrido un error del lado del servidor!"
//     })
//   }
// }
// ctrl.actualizar = async (req, res) => {
//   try {
//     var rolObject = await Rol.findOne({
//       nombreRol: req.body.rol
//     })
//     const bodyActualizar = {
//       nombreUsuario: req.body.nombreUsuario,
//       password: await Usuario.encryptPassword(req.body.password),
//       rol: rolObject._id
//     }
//     const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, bodyActualizar, {
//       new: true
//     });
//     res.status(200).json({
//       ok: true,
//       usuarioActualizado,
//       msg:"Usuario actualizado exitosamente!"
//     });
//     console.log("[>] Usuario.ctrl, actualizar: ", usuarioActualizado);
//   } catch (error) {
//     res.status(200).json({
//       ok: false,
//       msg: "Ha ocurrido un error del lado del servidor!",
//       error
//     });
//   }
// }
// ctrl.eliminar = async (req, res) => {
//   try {
//     const usuario = await Usuario.findByIdAndDelete(req.params.id);
//     res.status(200).json({
//       ok: true,
//       msg: `Usuario '${usuario.nombreUsuario}' eliminado correctamente! `
//     });
//     console.log("[>] Usuario.ctrl, eliminar: ", usuario);
//   } catch (error) {
//     res.status(500).json({
//       ok: false,
//       msg: "Ha ocurrido un error del lado del servidor!",
//       error
//     });
//   }
// }


module.exports = ctrl;