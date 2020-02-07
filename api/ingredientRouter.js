const express = require('express');
const db = require('../data/helpers')
const ingredientRouter = express.Router();


ingredientRouter.get('/', async (req,res)=> {
   try{ const ingredients = db.findIngredients()
    res.status(200).json(ingredients);
    }

    catch(err){
        res.status(500).json({message: 'Could not'})
    }
})

// ingredientRouter.get('/', (req,res)=> {
//     db('ingredients')
//     .then(stuff=> {
//         res.status(200).json(stuff)
//     })
//     .catch(err => {
//         res.status(500).json(err);
//     })
// })

module.exports = ingredientRouter;