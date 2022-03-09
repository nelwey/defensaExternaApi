import {
  authJwt
} from '../middlewares'
import {
  Router
} from 'express';
const router = Router();


//ctrl methods
import * as uvCtrl from '../controllers/Uv.ctrl';

router.post('/api/uv', [authJwt.verifyToken], uvCtrl.crear);
router.get('/api/uvs', [authJwt.verifyToken], uvCtrl.obtener);
router.get('/api/uv/:id', [authJwt.verifyToken], uvCtrl.obtenerPorId);
router.put('/api/uv/:id', [authJwt.verifyToken], uvCtrl.actualizar);
router.delete('/api/uv/:id', [authJwt.verifyToken, authJwt.isAdmin], uvCtrl.eliminar);

module.exports = router;