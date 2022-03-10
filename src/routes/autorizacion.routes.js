const {
  Router
} = require('express');
const router = Router();

//ctrl methods
const {
  iniciarSesion,
  cerrarSesion
} = require('../controllers/Autorizacion');

router.post('/api/autorizacion/iniciarsesion', iniciarSesion);
router.get('/api/autorizacion/cerrarsesion', cerrarSesion);

module.exports = router;