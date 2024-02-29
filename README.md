# Movie Reviews API

This is a simple Node.js and Express application for managing movie reviews.

## Features

- Handles movies, reviews, and users as data categories.
- Implements CRUD operations (GET, POST, PUT, DELETE) for movies, reviews, and users.
- Adheres to REST principles by using appropriate HTTP methods for different actions.
- Supports query parameters for filtering data.
- Renders views using a custom template engine.
- Allows form interaction for submitting reviews.
- Includes CSS styling for views.
- Organizes code into separate route and middleware files.

## API Endpoints

- Movies: `/movies`
  - GET: Retrieve all movies or filter by title and year.
  - POST: Create a new movie.
  - PUT: Update a movie by ID.
  - DELETE: Delete a movie by ID.

- Reviews: `/reviews`
  - GET: Retrieve all reviews or filter by movie ID.
  - POST: Create a new review.
  - PUT: Update a review by ID.
  - DELETE: Delete a review by ID.

- Users: `/users`
  - GET: Retrieve all users.
  - POST: Create a new user.
  - PUT: Update a user by ID.
  - DELETE: Delete a user by ID.
