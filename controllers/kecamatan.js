const responseData = require("../helpers/response-data");
var where = require('lodash.where');
const axios = require('axios');

module.exports = {
  getKecamatanByKotaId(req, res) {
    axios.get("https://kasirpintar.co.id/allAddress.txt").then(result => {
        alamat_kecamatan = result.data['address_kecamatan'];
        var resultFilter = where(alamat_kecamatan, {kota_id: req.body.kota_id});
      responseData.success(res, 200, "Success", resultFilter);
     })
     .catch(error => {
       return responseData.error(res, 400, "Bad Request");
   });
  },

}