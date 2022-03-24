const Bicicleta = require('../models/bicicleta')

// Esta funcion imprime el listado de las bicis.
exports.bicicleta_list = function(req, res){
    res.render('bicicletas/index', {bicis: Bicicleta.allBicis})
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function(req, res){
    let temp_bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo)
    temp_bici.ubicacion = [req.body.lat, req.body.lon]
    Bicicleta.add(temp_bici)
    res.redirect('/bicicletas')
} 

exports.bicicleta_delete_post = function(req, res){
    Bicicleta.removeById(req.params.id) 
    res.redirect('/bicicletas')
}

exports.bicicleta_update_get = function(req, res){
    let bici = Bicicleta.findById(req.params.id)
    res.render('bicicletas/update', {bici})
}

exports.bicicleta_update_post = function(req, res){
    let bici = Bicicleta.findById(req.body.id)
    bici.id = req.body.id
    bici.color = req.body.color
    bici.modelo = req.body.modelo
    bici.ubicacion = [req.body.lat, req.body.lon]

    res.redirect('/bicicletas')
}

exports.store = (req, res) => {
    let bicicleta = {
        id: req.body.id,
        color: req.body.color,
        modelo: req.body.modelo,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
    };
    // Crea la bicicleta
    Bicicleta.create(bicicleta)
    .then((id) => {
        res.redirect('/bicicletas');
    });
}

// Muestra la bicicleta
exports.show = (req, res) => {
    // Obtiene el id que viene en la url
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    Bicicleta.find(id).then((bicicleta) => {
      // Si el producto no existe entonces
      if (bicicleta == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
      // Si el producto existe entonces muestra la vista products/show.hbs
      // con la información del producto
      res.render('bicicletas/index', {bicicleta: bicicleta});
    });
  }
