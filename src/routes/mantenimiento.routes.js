import {
  authJwt
} from '../middlewares'
import {
  Router
} from 'express';
const router = Router();


//ctrl methods
import * as mantenimientoCtrl from '../controllers/Mantenimiento.ctrl';
router.post('/api/mantenimiento',mantenimientoCtrl.crear);
router.get('/api/mantenimientos', [authJwt.verifyToken, authJwt.isUsuario], mantenimientoCtrl.obtener);
router.get('/api/mantenimiento/:id', [authJwt.verifyToken, authJwt.isUsuario], mantenimientoCtrl.obtenerPorId);
router.post('/api/mantenimientosByTipo', [authJwt.verifyToken, authJwt.isUsuario], mantenimientoCtrl.obtenerPorTipo);
router.post('/api/mantenimientosByIdSolicitud', [authJwt.verifyToken, authJwt.isUsuario], mantenimientoCtrl.obtenerPorIdSolicitud);
router.put('/api/mantenimiento/:id', [authJwt.verifyToken, authJwt.isUsuario], mantenimientoCtrl.actualizar);
router.delete('/api/mantenimiento/:id', [authJwt.verifyToken, authJwt.isAdmin], mantenimientoCtrl.eliminar);

module.exports = router;