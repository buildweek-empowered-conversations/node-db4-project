
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredientsbyrecipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredientsbyrecipe').insert([
        {id: 1, recipe_id:1, ingredient_id:1,quantities:2},
        {id: 2, recipe_id: 1, ingredient_id:2, quantities:3},
        {id: 3, recipe_id: 1 ,ingredient_id: 3, quantities:3},
        {id:4, recipe_id:1, ingredient_id:9, quantities:3},
        {id:5, recipe_id:1, ingredient_id:8, quantities:2},
        {id:6, recipe_id:2,ingredient_id:1,quantities:3},
        {id:7,  recipe_id:2,ingredient_id:2, quantities:3},
        {id:8,  recipe_id:2,ingredient_id:3, quantities:3},
        {id:9,  recipe_id:2,ingredient_id:9, quantities:3},
        {id:10,  recipe_id:2,ingredient_id:6, quantities:3},
        {id:11,  recipe_id:2,ingredient_id:7, quantities:3},
        {id:12,  recipe_id:3,ingredient_id:8, quantities:5},
        {id:13,  recipe_id:3,ingredient_id:4, quantities:3},
        {id:14,  recipe_id:3,ingredient_id:5, quantities:4},
        {id:15,  recipe_id:3,ingredient_id:9, quantities:4}








      ]);
    });
};
