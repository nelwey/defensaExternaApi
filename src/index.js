//ARRANCA LA APP
import app from './app';
import './database';
const env = require('./config/config');

app.listen(env.PORT);
console.log('server listening on port', env.PORT);