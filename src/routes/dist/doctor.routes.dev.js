"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _middlewares = require("../middlewares");

var _express = require("express");

var doctorCtrl = _interopRequireWildcard(require("../controllers/Doctor.ctrl"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)(); //ctrl methods

router.post('/api/doctores', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerador], doctorCtrl.crear);
router.get('/api/doctores', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isSecretaria], doctorCtrl.obtener);
router.get('/api/doctores/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isSecretaria], doctorCtrl.obtenerPorId);
router.put('/api/doctores/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerador], doctorCtrl.actualizar);
router["delete"]('/api/doctores/:id', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isModerador], doctorCtrl.eliminar);
module.exports = router;