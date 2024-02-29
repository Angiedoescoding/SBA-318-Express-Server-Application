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
        let { title, year } = req.body;                  // Extracting the title and the year from the request body (unsure if we need add a rating in this case though)

        // Generating a new movie objest so it then gets added to the array of movies
        const newMovie = {
            id: movies.length + 1,
            title,
            year,
            rating
        };
        movies.push(newMovie);

        res.json({ message: 'Successfully created a new movie.', movie: newMovie});
    });

router
    .route('/:id')
    .put((req, res) => {                       // Updating a movie by ID
    res.json({ message: `Update movie with ID ${req.params.id}.`});
    })
    .delete((req, res) => {                   // Deleting a movie by ID
        const movieId = parseInt(req.params.id);        // parsing the id parameter to an integer to ensure it's a valid ID
    
    // Find the index of the movie with the given ID
    const index = movies.findIndex(movie => movie.id === movieId);      // searching for the movie in the movies array based on the provided ID 

    // Check if the movie exists
    if (index !== -1) {                     // if the movie is found (index is not negative)...
        // Remove the movie from the array
        movies.splice(index, 1);            //...use splice to remove to remove the movie from the array
        res.json({ message: `Deleted movie with ID ${movieId}.` });
    } else {
        // Movie not found
        res.status(404).json({ error: `Movie with ID ${movieId} not found.` });
    }
    })


module.exports = router; 