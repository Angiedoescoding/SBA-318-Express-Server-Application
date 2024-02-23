const express = require('express');
const moviesData = require('./data-routes/movies');     // Router for movie-related routes.
const reviewsData = require('./data-routes/reviews');   // Router for review-related routes.
const usersData = require('./data-routes/users');       // Router for user-related routes.
const incomingReq = require('./middleware/incomingrequests');
const path = require('path');                           // Setting up to manipulate file paths when will be serving static files using Express (img, .css, etc).

const app = express();
let PORT = 3000;



// serve static files from the styles directory
app.use(express.static("./styles"));

// Middleware
app.use(incomingReq); 

// Routes
app.use('/movies', moviesData);
app.use('/reviews', reviewsData);
app.use('/users', usersData);



// require the filesystem module
const fs = require("fs");
// define the template engine
app.engine("perscholas", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    // Here, we take the content of the template file, convert it to a string, and replace sections of
    // it with the values being passed to the engine.
    const rendered = content
      .toString()
      .replaceAll("#title#", `${options.title}`)
      .replaceAll("#secondtitle#", `${options.secondtitle}`)
      .replace("#content#", `${options.content}`);
    return callback(null, rendered);
  });
});

app.set("views", "./views"); // specify the views directory
app.set("view engine", "perscholas"); // register the template engine

app.get("/:number", (req, res) => {
    
    res.render("index", movies[req.params.number])
})


app.get("/", (req, res) => {
  const options = {
    title: "Movie Reviews",
    secondtitle: "Hello! Welcome to our Movie reviews website!",
    content:
      "Here you can: <br><br>  \
      <a href='/data-routes/movies.js'>View movies.</a> <br> \
      <a href='/data-routes/reviews.js'>View movies reviews.</a> <br> \
      <a href='/data-routes/users.js'>See our top reviews contributors.</a> <br><br>\
      You can also leave your own review! \
      <br><br>\
      We hope you will love it here! Enjoy!",
  };

  res.render("index", options);
});




//Handling errors in the middleware
app.use((err, req, res, next) => {                      // Setting up error handling middleware using a callback function with 4 parameters. 
    console.error(err.stack);                         // The error stack trace for checking the causeof  the issue/errors.
    res.status(500).send(`Something isn't working right. Please review.`)       // This will be shown when any error occurs during the request-response time.
});                                                     // 500 - Internal Server Error status.



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});



// Static files setup to get to (http://localhost:3000/public/index.html)
// app.use('/public', express.static(path.join(__dirname, 'public')));         // Serve static files from 'public' directory/route
// app.get('/', (req, res) => {                      // Message about all movies
//         res.send('Find all movies here!')     
//     })
