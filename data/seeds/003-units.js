
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {id: 1, name: 'Teaspoon'},
        {id: 2, name: 'TableSpoon'},
        {id: 3, name: 'Cup'}
       ]);
    });
};
