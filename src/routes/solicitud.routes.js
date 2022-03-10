const authJwt = require('../middlewares/authJwt');
const {
  Router
} = require('express');
const router = Router();


//ctrl methods
const {
  crear,
  obtener,
  obtenerPorUE,
  obtenerPorEstado,
  obtenerPorId,
  actualizar,
  eliminar
} = require('../controllers/Solicitud.ctrl');
router.post('/api/solicitud', [authJwt.verifyToken, authJwt.isUsuario], crear);
router.get('/api/solicitudes', [authJwt.verifyToken, authJwt.isUsuario], obtener);
router.post('/api/solicitudesByUE', [authJwt.verifyToken, authJwt.isUsuario], obtenerPorUE);
router.post('/api/solicitudesByEstado', [authJwt.verifyToken, authJwt.isUsuario], obtenerPorEstado);
router.get('/api/solicitud/:id', [authJwt.verifyToken, authJwt.isUsuario], obtenerPorId);
router.put('/api/solicitud/:id', [authJwt.verifyToken, authJwt.isUsuario], actualizar);
router.delete('/api/solicitud/:id', [authJwt.verifyToken, authJwt.isAdmin], eliminar);

module.exports = router;