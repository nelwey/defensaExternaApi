"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _middlewares = require("../middlewares");

var _express = require("express");

var especialidadCtrl = _interopRequireWildcard(require("../controllers/Especialidad.ctrl"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)(); //ctrl methods

router.post('/api/especialidades', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerador], especialidadCtrl.crear);
router.get('/api/especialidades', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isSecretaria], especialidadCtrl.obtener);
router.get('/api/especialidades/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isSecretaria], especialidadCtrl.obtenerPorId);
router.put('/api/especialidades/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerador], especialidadCtrl.actualizar);
router["delete"]('/api/especialidades/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerador], especialidadCtrl.eliminar);
module.exports = router;