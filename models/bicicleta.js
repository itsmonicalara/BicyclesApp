// models/bicicleta.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

let Bicicleta = function(id, color, modelo, latitude, longitude){
    this.id = id
    this.color = color
    this.modelo = modelo
    this.latitude = latitude
    this.longitude = longitude
}

// Crea una nueva bicicleta (pero no lo almacena en la base)
exports.factory = (id, color, modelo, latitude, longitude) => {
    return {
      id: id,
      color: color,
      modelo: modelo,
      latitude: latitude,
      longitude: longitude
    }
}

// Obtiene todos las bicicletas en la base
Bicicleta.all = () => {
    // Realiza la consulta dentro de knex
    return knex
      .select('*')
      .from('bicycles');
}

// Almacen en la base de datos la bicicleta
Bicicleta.add = (bicicleta) => {
    return knex('bicycles')
      .insert({
        id: bicicleta.id,
        color: bicicleta.color,
        modelo: bicicleta.modelo,
        latitude: bicicleta.latitude,
        longitude: bicicleta.longitude
      });
}

Bicicleta.update = (bicicleta_id, bicicleta) => {
    return knex('bicycles')
        .update({
            color: bicicleta.color,
            modelo: bicicleta.modelo,
            latitude: bicicleta.latitude,
            longitude: bicicleta.longitude
        })
        .where('id', bicicleta_id);
};

// Obtiene la información de una bicicleta por su id
Bicicleta.find = (id) => {
    return knex
      .select('*')
      .from('bicycles')
      .where('id', id)
      .first();
  }

// Eliminar
Bicicleta.removeById = (id) =>{
    return knex('bicycles').delete().where('id', id);
}


Bicicleta.prototype.toString = function(){
    return `Id: ${this.id}, color: ${this.color}`
}

module.exports = Bicicleta