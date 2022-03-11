const authJwt = require('../middlewares/authJwt');
const {Router} = require('express');
const router = Router();


//ctrl methods
const {
  crear,
  obtener,
  obtenerPorUV,
  obtenerPorId,
  actualizar,
  eliminar
} = require('../controllers/uEducativa.ctrl');

router.post('/api/ueducativa',  crear);
router.get('/api/ueducativas', [authJwt.verifyToken, authJwt.isUsuario], obtener);
router.post('/api/ueducativasByUV', [authJwt.verifyToken, authJwt.isUsuario], obtenerPorUV);
router.get('/api/ueducativa/:id', [authJwt.verifyToken, authJwt.isUsuario], obtenerPorId);
router.put('/api/ueducativa/:id', [authJwt.verifyToken, authJwt.isUsuario], actualizar);
router.delete('/api/ueducativa/:id', [authJwt.verifyToken, authJwt.isAdmin], eliminar);

module.exports = router;