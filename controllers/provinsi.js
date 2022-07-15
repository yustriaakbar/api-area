const responseData = require("../helpers/response-data");
var where = require('lodash.where');
const axios = require('axios');

module.exports = {
  list(req, res) {
    axios.get("https://kasirpintar.co.id/allAddress.txt").then(result => {
        alamat_provinsi = result.data['address_provinsi'];
      responseData.success(res, 200, "Success", alamat_provinsi);
     })
     .catch(error => {
       return responseData.error(res, 400, "Bad Request");
   });
  },
  
  getProvinsiById(req, res) {
    axios.get("https://kasirpintar.co.id/allAddress.txt").then(result => {
        alamat_provinsi = result.data['address_provinsi'];
        var resultFilter = where(alamat_provinsi, {id: req.body.provinsi_id});
      responseData.success(res, 200, "Success", resultFilter);
     })
     .catch(error => {
       return responseData.error(res, 400, "Bad Request");
   });
  },

}