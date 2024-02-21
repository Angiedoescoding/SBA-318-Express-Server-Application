const express = require('express');
const router = express.Router();           // Creating a router instance

router
    .route('/')
    .get((req, res) => {                                // Getting all movies
        res.json({ message: 'Get all movies.'});   
    })
    .post((req, res) => {                               // Creating a new movie
        res.json({ message: 'Create a new movie.'});
    });

router
    .route('/:id')
    .put((req, res) => {                       // Updating a movie by ID
    res.json({ message: `Update movie with ID ${req.params.id}.`});
    })
    .delete((req, res) => {                   // Deletng a movie by ID
        res.json({ message: `Deleting the movie with ID ${res.params.id}`});
    })


module.exports = router; 