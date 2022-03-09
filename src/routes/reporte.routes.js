import {
  authJwt
} from '../middlewares'
import {
  Router
} from 'express';
const router = Router();


//ctrl methods
import * as reporteCtrl from '../controllers/Reporte.ctrl';

router.post('/api/reporte/mantenimiento', [authJwt.verifyToken, authJwt.isUsuario], reporteCtrl.obtenerMantenimientos);
router.post('/api/reporte/mantenimientoByTipo', reporteCtrl.obtenerPorTipo);

module.exports = router;