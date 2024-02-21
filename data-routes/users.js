const express = require('express');
const router = express.Router();           // Creating a router instance

router
    .route('/')
    .get((req, res) => {                                // Getting all users
        res.json({ message: 'Get all users.'});   
    })
    .post((req, res) => {                               // Creating a new user
        res.json({ message: 'Create a new user.'});
    });

// Update the user

router
    .route('/:id')    
    .put((req, res) => {                       
    res.json({ message: `Update a user with ID ${req.params.id}.`});
    })
    .delete((req, res) => {                   // Deleting a user by ID
        res.json({ message: `Deleting the user with ID ${req.params.id}.`});
    })

module.exports = router; 