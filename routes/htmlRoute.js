//dependencies
const path = require('path');

//express.js
const routes = require('express').Router();

// GET Route for feedback page
routes.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for all 
routes.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Export results
module.exports = routes;