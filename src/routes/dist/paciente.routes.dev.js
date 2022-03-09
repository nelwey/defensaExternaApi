"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _middlewares = require("../middlewares");

var _express = require("express");

var pacienteCtrl = _interopRequireWildcard(require("../controllers/Paciente.ctrl"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)(); //ctrl methods

router.post('/api/pacientes', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isSecretaria], pacienteCtrl.crear);
router.get('/api/pacientes', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isSecretaria], pacienteCtrl.obtener);
router.get('/api/pacientes/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isSecretaria], pacienteCtrl.obtenerPorId);
router.get('/api/pacientes/ci/:ci', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isSecretaria], pacienteCtrl.obtenerPorCI);
router.put('/api/pacientes/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isSecretaria], pacienteCtrl.actualizar);
router["delete"]('/api/pacientes/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerador], pacienteCtrl.eliminar);
module.exports = router;