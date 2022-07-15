const express = require('express');
const router = express.Router();
const authController = require('../controllers').authentication;
const kecamatanController = require('../controllers').kecamatan;
const validationMiddleware = require('../middleware/validation-middleware');

router.post('/', [authController.verifyToken], validationMiddleware.showKecamatanByKotaId, kecamatanController.getKecamatanByKotaId);

module.exports = router;