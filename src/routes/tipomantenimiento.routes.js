import {
  authJwt
} from '../middlewares'
import {
  Router
} from 'express';
const router = Router();


//ctrl methods
import * as tipoMantenimientoCtrl from '../controllers/TipoMantenimiento.ctrl';
router.post('/api/tipoMantenimiento', [authJwt.verifyToken, authJwt.isUsuario], tipoMantenimientoCtrl.crear);
router.get('/api/tipoMantenimientos', [authJwt.verifyToken, authJwt.isUsuario], tipoMantenimientoCtrl.obtener);
router.get('/api/tipoMantenimiento/:id', [authJwt.verifyToken, authJwt.isUsuario], tipoMantenimientoCtrl.obtenerPorId);
router.put('/api/tipoMantenimiento/:id', [authJwt.verifyToken, authJwt.isUsuario], tipoMantenimientoCtrl.actualizar);
router.delete('/api/tipoMantenimiento/:id', [authJwt.verifyToken, authJwt.isAdmin], tipoMantenimientoCtrl.eliminar);

module.exports = router;