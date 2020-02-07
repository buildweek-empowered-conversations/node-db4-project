const express = require('express');
const db = require('./data/db-config');
const server = express();
 server.use(express.json());

const recipeRouter = require('./api/recipeRouter')
const ingredientRouter = require('./api/ingredientRouter');

server.use('/api/recipes' , recipeRouter);
server.use('/api/ingredients', ingredientRouter);


server.get('/', (req,res) => {
    res.send('This is the recipe API')
})



 

module.exports = server;
 