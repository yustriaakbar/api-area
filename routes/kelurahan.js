const express = require('express');
const router = express.Router();
const authController = require('../controllers').authentication;
const kelurahanController = require('../controllers').kelurahan;
const validationMiddleware = require('../middleware/validation-middleware');

router.post('/', [authController.verifyToken], validationMiddleware.showKelurahanByKotaId , kelurahanController.getKelurahanByKecamatanId);

module.exports = router;