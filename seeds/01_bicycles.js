/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// seeds/01_products.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bicycles').del()
    .then(function () {
      // Inserts seed entries
      return knex('bicycles').insert([
        { color: 'Roja', modelo: 'Trek', latitude: 19.28320851089808, longitude: -99.13825207977416},
        { color: 'Roja', modelo: 'Bianchi', latitude: 19.284383229900698, longitude: -99.13917475964031},
      ]);
    });
};
