const express = require('express');
const router = express.Router();           // Creating a router instance

const movies = [
    { id: 1, title: "The Fifth Element", year: 1997, rating: 9 }, 
    { id: 2, title: "The Chestnut Man", year: 2021, rating: 9 }, 
    { id: 3, title: "Home Alone", year: 1990, rating: 9 }
]

// Getting the movie using the query parameters
router.get('/', (req, res) => {    // Parsing query parameters
    const { title, year } = req.query;

    // Filtering movies based on query parameters
    let filteredMovies = movies;
    if (title) {
        filteredMovies = filteredMovies.filter(movie => movie.title === title);
    }
    if (year) {
        filteredMovies = filteredMovies.filter(movie => movie.year === parseInt(year));
    }

    res.json(filteredMovies);
});



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
    .delete((req, res) => {                   // Deleting a movie by ID
        res.json({ message: `Deleting the movie with ID ${req.params.id}`});
    })


module.exports = router; 