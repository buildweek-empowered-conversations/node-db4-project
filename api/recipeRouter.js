const express = require('express');
const db = require('../data/helpers')
const recipeRouter = express.Router();
 

recipeRouter.get('/' , async (req,res) => {
    try {
        const recipies = await db.find();
        res.status(200).json(recipies)
    }
    catch (err) {
        res.status(500).json({message: 'There was a problem with your request', err})
    }
})


recipeRouter.get('/:id', (req,res)=> {
    const {id}= req.params;
    db.findById(id)
    .then(recipe=> {
        if(recipe){
        res.json(recipe)}
        else{
            res.status(404).json({message: 'Could not find the recipe'})
        }

    })
    .catch(err=> {
        res.status(500).json({messsage: 'Failed to get the recipe.'})
    })


})

module.exports =recipeRouter;