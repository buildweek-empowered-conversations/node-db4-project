
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'Coconut Milk' },
        {id: 2, name: 'Galangal' },
        {id: 3, name: 'LemonGrass' },
        {id: 4, name: 'Ginger' },
        {id: 5, name: 'Star Anise' },
        {id:6, name: 'Tamarind' },
        {id:7, name: 'crushed Peanuts' },
        {id: 8, name: 'Broth' },
        {id:9, name: 'Siracha Sauce'}


      ]);
    });
};
