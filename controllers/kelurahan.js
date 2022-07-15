const responseData = require("../helpers/response-data");
var where = require('lodash.where');
const axios = require('axios');

module.exports = {
  getKelurahanByKecamatanId(req, res) {
    axios.get("https://kasirpintar.co.id/allAddress.txt").then(result => {
        alamat_kelurahan = result.data['address_kelurahan'];
        var resultFilter = where(alamat_kelurahan, {kecamatan_id: req.body.kecamatan_id});
      responseData.success(res, 200, "Success", resultFilter);
     })
     .catch(error => {
       return responseData.error(res, 400, "Bad Request");
   });
  },

}