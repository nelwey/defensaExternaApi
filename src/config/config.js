const PORT = process.env.PORT || 3000;

const ENVIRONMENT = process.env.NODE_ENV || 'dev';

// BD

var URLDB;
if(ENVIRONMENT === 'dev'){
  URLDB = 'mongodb+srv://nelwey:nelwey@cluster0-zzplm.mongodb.net/defensaexterna';
}else{
  URLDB = process.env.MONGO_URI;
}


module.exports = {
  

  PORT,
  ENVIRONMENT,
  URLDB

}