const mongoose = require('mongoose');
const env = require('./config/config');

mongoose.connect(env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex:true
  })
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error))