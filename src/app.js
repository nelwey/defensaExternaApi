import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import {crearRoles} from './libs/initialSetup';

const app = express();

//creando roles por defecto
crearRoles();

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


export default app;