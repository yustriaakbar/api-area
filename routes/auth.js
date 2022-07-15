const express = require('express');
const router = express.Router();
const authController = require('../controllers').authentication;

router.post('/login', authController.login);

module.exports = router;