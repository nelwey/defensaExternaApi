const authJwt = require( '../middlewares/authJwt');
const { Router} = require('express'); 
const router = Router();


//ctrl methods
const {crear,obtener, obtenerPorId, actualizar,eliminar} =  require('../controllers/Uv.ctrl'); 

router.post('/api/uv', [authJwt.verifyToken], crear);
router.get('/api/uvs', [authJwt.verifyToken], obtener);
router.get('/api/uv/:id', [authJwt.verifyToken], obtenerPorId);
router.put('/api/uv/:id', [authJwt.verifyToken], actualizar);
router.delete('/api/uv/:id', [authJwt.verifyToken, authJwt.isAdmin], eliminar);

module.exports = router;