const express = require('express');
const moviesData = require('./data-routes/movies');     // Router for movie-related routes.
const reviewsData = require('./data-routes/reviews');   // Router for review-related routes.
const usersData = require('./data-routes/users');       // Router for user-related routes.
const incomingReq = require('./middleware/incomingrequests');
const path = require('path');                           // Setting up to manipulate file paths when will be serving static files using Express (img, .css, etc).

const app = express();
let PORT = 3000;

// Middleware
app.use(incomingReq); 


// Routes
app.use('/movies', moviesData);
app.use('/reviews', reviewsData);
app.use('/users', usersData);


// Static files setup to get to (http://localhost:3000/public/index.html)

app.use('/public', express.static(path.join(__dirname, 'public')));         // Serve static files from 'public' directory/route

app.get('/', (req, res) => {                      // Message about all movies
        res.send('Find all movies here!')     
    })

//Handling errors in the middleware
app.use((err, req, res, next) => {                      // Setting up error handling middleware using a callback function with 4 parameters. 
    console.error(err.stack);                         // The error stack trace for checking the causeof  the issue/errors.
    res.status(500).send(`Something isn't working right. Please review.`)       // This will be shown when any error occurs during the request-response time.
});                                                     // 500 - Internal Server Error status.



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});