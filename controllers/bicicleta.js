const Bicicleta = require('../models/bicicleta')

// Esta funcion imprime el listado de las bicis.
exports.bicicleta_list = function(req, res){
    Bicicleta.all().then((data) => {
    let bicis = data;
    res.render('bicicletas/index', {bicis: bicis});
    });
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function(req, res){
    let temp_bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo, req.body.latitude, req.body.longitude)
    Bicicleta.add(temp_bici).then((id) => {
        res.redirect('/bicicletas');
    });
}; 

exports.bicicleta_delete_post = function(req, res){
    Bicicleta.removeById(req.params.id).then((id) => {
        res.redirect('/bicicletas')
    }); 
};

exports.bicicleta_update_get = function(req, res){
    let bici = Bicicleta.findById(req.params.id)
    res.render('bicicletas/update', {bici})
}

exports.bicicleta_update_post = function (req, res) {
    let biciId = req.body.id;
  
    let biciUpdate = {
      color: req.body.color,
      modelo: req.body.modelo,
      lat: req.body.latitude,
      lon: req.body.longitude,
    };
  
    Bicicleta.update(biciId, biciUpdate).then((id) => {
      res.redirect("/bicicletas");
    });
};

