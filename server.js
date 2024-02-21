const express = require('express');
const moviesData = require('./data-routes/movies');     // Router for movie-related routes
const reviewsData = require('./data-routes/reviews');   // Router for review-related routes
const usersData = require('./data-routes/users');       // Router for user-related routes

const app = express();
let PORT = 3000;



// Routes
app.use('/movies', moviesData);
app.use('/reviews', reviewsData);
app.use('/users', usersData);










app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});