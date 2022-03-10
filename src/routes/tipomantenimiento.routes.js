const authJwt = require('../middlewares/authJwt');
const {
  Router
} = require('express');
const router = Router();


//ctrl methods
const {
  crear,
  obtener,
  obtenerPorId,
  actualizar,
  eliminar
} = require('../controllers/TipoMantenimiento.ctrl');
router.post('/api/tipoMantenimiento', [authJwt.verifyToken, authJwt.isUsuario], crear);
router.get('/api/tipoMantenimientos', [authJwt.verifyToken, authJwt.isUsuario], obtener);
router.get('/api/tipoMantenimiento/:id', [authJwt.verifyToken, authJwt.isUsuario], obtenerPorId);
router.put('/api/tipoMantenimiento/:id', [authJwt.verifyToken, authJwt.isUsuario], actualizar);
router.delete('/api/tipoMantenimiento/:id', [authJwt.verifyToken, authJwt.isAdmin], eliminar);

module.exports = router;