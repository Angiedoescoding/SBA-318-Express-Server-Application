const express = require('express');
const router = express.Router();           // Creating a router instance

router
    .route('/')
    .get((req, res) => {                                // Getting all reviews
        res.json({ message: 'Get all reviews.'});   
    })
    .post((req, res) => {                               // Creating a new review
        res.json({ message: 'Create a new review.'});
    });

// Get reviews by movie ID
router.get('/movies/:movieId', (req, res) => {
        res.json({ message: `Get reviews for the movie with ID ${req.params.movieId}.`})
    });

router
    .route('/:id')    
    .put((req, res) => {                       
    res.json({ message: `Update a movie review with ID ${req.params.id}.`});
    })
    .delete((req, res) => {                   // Deletng a movie by ID
        res.json({ message: `Deleting the movie review with ID ${res.params.id}.`});
    })


module.exports = router; 