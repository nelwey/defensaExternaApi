const authJwt = require('../middlewares/authJwt');
const {Router} = require('express');
const router = Router();


//ctrl methods
const {
  crear,
} = require('../controllers/Log');

router.post('/api/log', crear);


module.exports = router;