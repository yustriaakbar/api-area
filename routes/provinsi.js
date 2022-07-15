const express = require('express');
const router = express.Router();
const authController = require('../controllers').authentication;
const provinsiController = require('../controllers').provinsi;
const validationMiddleware = require('../middleware/validation-middleware');

router.get('/', [authController.verifyToken], provinsiController.list);
router.post('/', [authController.verifyToken], validationMiddleware.validateProvinsiId, provinsiController.getProvinsiById);

module.exports = router;