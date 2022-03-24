let express = require('express');
let router = express.Router();
let bicicletaControllerAPI = require('../../controllers/api/bicicletasControllerAPI');

router.get('/', bicicletaControllerAPI.bicicletas_list);

module.exports = router