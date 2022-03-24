let Bicicleta = require('../../models/bicicleta');

exports.bicicletas_list = function (req, res) {
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    })
};