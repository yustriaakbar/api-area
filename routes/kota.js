const express = require('express');
const router = express.Router();
const authController = require('../controllers').authentication;
const kotaController = require('../controllers').kota;
const validationMiddleware = require('../middleware/validation-middleware');

router.post('/', [authController.verifyToken], validationMiddleware.validateProvinsiId, kotaController.getKotaByProvinsiId);

module.exports = router;