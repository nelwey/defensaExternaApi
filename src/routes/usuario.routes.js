const authJwt = require('../middlewares/authJwt');
const verifySignup = require('../middlewares/verifySignup');
const {
  Router
} = require('express');
const router = Router();


//ctrl methods
const {
  crear,
  obtener,
  obtenerPorId,
  actualizar,
  eliminar
} = require('../controllers/Usuario.ctrl');

router.post('/api/usuarios', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkDuplicateUsername, verifySignup.checkPasswordExist, verifySignup.checkRolesRequired, verifySignup.checkRolesExisted], crear);
router.get('/api/usuarios', [authJwt.verifyToken, authJwt.isAdmin], obtener);
router.get('/api/usuarios/:id', [authJwt.verifyToken, authJwt.isAdmin], obtenerPorId);
router.put('/api/usuarios/:id', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted], actualizar);
router.delete('/api/usuarios/:id', [authJwt.verifyToken, authJwt.isAdmin], eliminar);

module.exports = router;