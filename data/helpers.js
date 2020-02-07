const db = require('../data/db-config');


module.exports ={
    find,
    findIngredients,
    findById
 }

function find(){
    return db ('recipe')
}

function findById(id){
    return db('recipe')
    .where({id})
    .first();
}
function findIngredients(){
    return db('ingredients')
}