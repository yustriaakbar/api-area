const responseData = require("../helpers/response-data");
var where = require('lodash.where');
const axios = require('axios');

module.exports = {
  getKotaByProvinsiId(req, res) {
    axios.get("https://kasirpintar.co.id/allAddress.txt").then(result => {
        alamat_kota = result.data['address_kota'];
        var resultFilter = where(alamat_kota, {provinsi_id: req.body.provinsi_id});
      responseData.success(res, 200, "Success", resultFilter);
     })
     .catch(error => {
       return responseData.error(res, 400, "Bad Request");
   });
  },

}