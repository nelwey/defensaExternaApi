"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _initialSetup = require("./libs/initialSetup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //creando roles por defecto

(0, _initialSetup.crearRoles)(); //Middlewares

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use((0, _cors["default"])()); //Routes
// app.use(require('./routes/books.routes'));

app.use(require('./routes/autorizacion.routes'));
app.use(require('./routes/usuario.routes'));
app.use(require('./routes/paciente.routes'));
app.use(require('./routes/especialidad.routes'));
app.use(require('./routes/consultorio.routes'));
app.use(require('./routes/doctor.routes'));
app.use(require('./routes/horario.routes'));
app.use(require('./routes/consulta.routes'));
var _default = app;
exports["default"] = _default;