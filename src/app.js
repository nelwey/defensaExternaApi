const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const libs = require('./libs/initialSetup');

const app = express();

//creando roles por defecto
// libs.crearRoles();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

//Routes

app.use(require('./routes/uv.routes'));
app.use(require('./routes/autorizacion.routes'));
app.use(require('./routes/usuario.routes'));
app.use(require('./routes/ueducativa.routes'));
app.use(require('./routes/tipomantenimiento.routes'));
app.use(require('./routes/solicitud.routes'));
app.use(require('./routes/mantenimiento.routes'));
app.use(require('./routes/reporte.routes'));
app.use(require('./routes/log.routes'));


module.exports = app;