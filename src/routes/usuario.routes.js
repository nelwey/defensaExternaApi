import {
  authJwt,
  verifySignup
} from '../middlewares'
import {
  Router
} from 'express';
const router = Router();


//ctrl methods
import * as usuarioCtrl from '../controllers/Usuario.ctrl';

router.post('/api/usuarios', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkDuplicateUsername, verifySignup.checkPasswordExist, verifySignup.checkRolesRequired, verifySignup.checkRolesExisted], usuarioCtrl.crear);
router.get('/api/usuarios', [authJwt.verifyToken, authJwt.isAdmin], usuarioCtrl.obtener);
router.get('/api/usuarios/:id', [authJwt.verifyToken, authJwt.isAdmin], usuarioCtrl.obtenerPorId);
router.put('/api/usuarios/:id', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted], usuarioCtrl.actualizar);
router.delete('/api/usuarios/:id', [authJwt.verifyToken, authJwt.isAdmin], usuarioCtrl.eliminar);

module.exports = router;