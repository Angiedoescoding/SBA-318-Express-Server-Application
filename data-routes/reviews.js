const express = require('express');
const router = express.Router();           // Creating a router instance

const reviews = [
    { id: 1, movieId: 1, rating: 9, comment: "Great movie!" },
    { id: 2, movieId: 2, rating: 8, comment: "Good storyline." },
    { id: 3, movieId: 3, rating: 10, comment: "Must-watch!" }
];

// GET route for retrieving all reviews or reviews by movie ID with query parameters
router.get('/', (req, res) => {
    const { movieId } = req.query;

    // Filtering reviews based on query parameter (movieId)
    let filteredReviews = reviews;
    if (movieId) {
        filteredReviews = filteredReviews.filter(review => review.movieId == movieId);
    }

    res.json(filteredReviews);
});



router
    .route('/')
    .get((req, res) => {                                // Getting all reviews
        res.json({ message: 'Get all reviews.'});   
    })
    .post((req, res) => {                               // Creating a new review
        let { movieId, rating, comment } = req.body;

        // Generating a new movie review so it then gets added to the array of reviews
        const newReview = {
            id: reviews.length + 1,
            movieId,
            rating,
            comment
        };
        reviews.push(newReview);

        res.json({ message: 'Successfully created a new review.', review: newReview});
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
    .delete((req, res) => {                   // Deleting a movie review by ID
        res.json({ message: `Deleting the movie review with ID ${req.params.id}.`});
    })


module.exports = router; 