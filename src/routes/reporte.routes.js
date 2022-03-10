const authJwt = require('../middlewares/authJwt');
const {
  Router
} = require('express');
const router = Router();


//ctrl methods
const {
  obtenerMantenimientos,
  obtenerPorTipo
} = require('../controllers/Reporte.ctrl');

router.post('/api/reporte/mantenimiento', [authJwt.verifyToken, authJwt.isUsuario], obtenerMantenimientos);
router.post('/api/reporte/mantenimientoByTipo', obtenerPorTipo);

module.exports = router;