const express = require('express');
const moviesData = require('./data-routes/movies');     // Router for movie-related routes
const reviewsData = require('./data-routes/reviews');   // Router for review-related routes
const usersData = require('./data-routes/users');       // Router for user-related routes
const incomingReq = require('./middleware/incomingrequests');
const { error } = require('console');

const app = express();
let PORT = 3000;

// Middleware
app.use(incomingReq); 

// Routes
app.use('/movies', moviesData);
app.use('/reviews', reviewsData);
app.use('/users', usersData);



//Handling errors in the middleware
app.use((err, req, res, next) => {                      // Setting up error handling middleware using a callback function with 4 parameters. 
    console.error(error.stack);                         // The error stack trace for checking the causeof  the issue/errors.
    res.status(500).send(`Something isn't working right. Please review.`)       // This will be shown when any error occurs during the request-response time.
});                                                     // 500 - Internal Server Error status.






app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});