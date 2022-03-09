import {
  authJwt
} from '../middlewares'
import {
  Router
} from 'express';
const router = Router();


//ctrl methods
import * as uEducativaCtrl from '../controllers/uEducativa.ctrl';

router.post('/api/ueducativa', [authJwt.verifyToken, authJwt.isUsuario], uEducativaCtrl.crear);
router.get('/api/ueducativas', [authJwt.verifyToken, authJwt.isUsuario], uEducativaCtrl.obtener);
router.post('/api/ueducativasByUV', [authJwt.verifyToken, authJwt.isUsuario], uEducativaCtrl.obtenerPorUV);
router.get('/api/ueducativa/:id', [authJwt.verifyToken, authJwt.isUsuario], uEducativaCtrl.obtenerPorId);
router.put('/api/ueducativa/:id', [authJwt.verifyToken, authJwt.isUsuario], uEducativaCtrl.actualizar);
router.delete('/api/ueducativa/:id', [authJwt.verifyToken, authJwt.isAdmin], uEducativaCtrl.eliminar);

module.exports = router;