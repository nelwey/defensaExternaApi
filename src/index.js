//ARRANCA LA APP
const app = require('./app');
require('./database');
const env = require('./config/config');

app.listen(env.PORT);
console.log('server listening on port', env.PORT);