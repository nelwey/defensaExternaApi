import {
  Router
} from 'express';
const router = Router();

//ctrl methods
import * as autorizacionCtrl from '../controllers/Autorizacion';

router.post('/api/autorizacion/iniciarsesion', autorizacionCtrl.iniciarSesion);
router.get('/api/autorizacion/cerrarsesion', autorizacionCtrl.cerrarSesion);

module.exports = router;