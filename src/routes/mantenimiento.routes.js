const authJwt = require('../middlewares/authJwt');
const {
  Router
} = require('express');
const router = Router();

const {
  crear,
  obtener,
  obtenerPorId,
  obtenerPorTipo,
  obtenerPorIdSolicitud,
  actualizar,
  eliminar
} = require('../controllers/Mantenimiento.ctrl');
router.post('/api/mantenimiento', crear);
router.get('/api/mantenimientos', [authJwt.verifyToken, authJwt.isUsuario], obtener);
router.get('/api/mantenimiento/:id', [authJwt.verifyToken, authJwt.isUsuario], obtenerPorId);
router.post('/api/mantenimientosByTipo', [authJwt.verifyToken, authJwt.isUsuario], obtenerPorTipo);
router.post('/api/mantenimientosByIdSolicitud', [authJwt.verifyToken, authJwt.isUsuario], obtenerPorIdSolicitud);
router.put('/api/mantenimiento/:id', [authJwt.verifyToken, authJwt.isUsuario], actualizar);
router.delete('/api/mantenimiento/:id', [authJwt.verifyToken, authJwt.isAdmin], eliminar);

module.exports = router;