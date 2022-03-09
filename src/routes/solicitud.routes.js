import {
  authJwt
} from '../middlewares'
import {
  Router
} from 'express';
const router = Router();


//ctrl methods
import * as solicitudCtrl from '../controllers/Solicitud.ctrl';
router.post('/api/solicitud', [authJwt.verifyToken, authJwt.isUsuario], solicitudCtrl.crear);
router.get('/api/solicitudes', [authJwt.verifyToken, authJwt.isUsuario], solicitudCtrl.obtener);
router.post('/api/solicitudesByUE', [authJwt.verifyToken, authJwt.isUsuario], solicitudCtrl.obtenerPorUE);
router.post('/api/solicitudesByEstado', [authJwt.verifyToken, authJwt.isUsuario], solicitudCtrl.obtenerPorEstado);
router.get('/api/solicitud/:id', [authJwt.verifyToken, authJwt.isUsuario], solicitudCtrl.obtenerPorId);
router.put('/api/solicitud/:id', [authJwt.verifyToken, authJwt.isUsuario], solicitudCtrl.actualizar);
router.delete('/api/solicitud/:id', [authJwt.verifyToken, authJwt.isAdmin], solicitudCtrl.eliminar);

module.exports = router;