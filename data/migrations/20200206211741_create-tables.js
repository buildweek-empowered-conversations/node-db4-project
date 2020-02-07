
exports.up = function(knex) {
    return knex.schema.createTable('recipe' , tbl => {
        tbl.increments('id')
        tbl.string('name', 225).notNullable().unique();
        tbl.string('description', 225);
    })
    .createTable('instructions' , tbl => {
        tbl.increments('id');
        tbl.string('description').notNullable();
        tbl.integer('steps_number').notNullable();
        tbl.integer('recipe_id')
           .unsigned()
           .references('id')
           .inTable('recipe')
           .onUpdate('CASCADE')
           .onDelete('RESTRICT')
    })
    .createTable('units', tbl => {
        tbl.increments('id');
        tbl.string('name').notNullable().unique();
        tbl.string('description');
    })
    .createTable('ingredients', tbl => {
        tbl.increments('id');
        tbl.string('name').notNullable().unique();
        tbl.integer('unit_id')
           .unsigned()
           .references('id')
           .inTable('units')
           .onUpdate('CASCADE')
           .onDelete('RESTRICT');
    })
    .createTable('ingredientsbyrecipe', tbl => {
        tbl.increments('id');
        tbl.integer('recipe_id')
           .unsigned()
           .references('id')
           .inTable('recipe')
           .onUpdate('CASCADE')
           .onDelete('RESTRICT');
        tbl.integer('ingredient_id')
           .unsigned()
           .references('id')
           .inTable('ingredients')
           .onUpdate('CASCADE')
           .onDelete('RESTRICT');
        tbl.float('quantities').notNullable();      
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('ingredientsbyrecipe')
                      .dropTableIfExists('instructions')
                      .dropTableIfExists('ingredients')
                      .dropTableIfExists('units')
                      .dropTableIfExists('recipe')
  };