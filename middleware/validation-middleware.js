const Validator = require('../helpers/validate');

const validateProvinsiId = async (req, res, next) => {
    const validationRule = {
        "provinsi_id": "required",
    }

    await Validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

const showKecamatanByKotaId = async (req, res, next) => {
    const validationRule = {
        "kota_id": "required",
    }

    await Validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

const showKelurahanByKotaId = async (req, res, next) => {
    const validationRule = {
        "kecamatan_id": "required",
    }

    await Validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

module.exports = {
    validateProvinsiId, 
    showKecamatanByKotaId,
    showKelurahanByKotaId
};