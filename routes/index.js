const express = require('express');
var rootRouter = express.Router();
const auth = require('./auth');
const provinsi = require('./provinsi');
const kota = require('./kota');
const kecamatan = require('./kecamatan');
const kelurahan = require('./kelurahan');

rootRouter.use('/', auth);
rootRouter.use('/provinsi', provinsi);
rootRouter.use('/kota', kota);
rootRouter.use('/kecamatan', kecamatan);
rootRouter.use('/kelurahan', kelurahan);

module.exports = rootRouter;