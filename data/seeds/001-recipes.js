exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe").insert([
        { id: 1, name: "Tom Kha Gai", description: "Thai Coconut Soup" },
        { id: 2, name: "Curry Panang", description: "Spicy and tangy Curry" },
        { id: 3, name: "Pho", description: "Best Soup Ever!" }
      ]);
    });
};
