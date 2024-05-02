// Require express.js
const express = require('express');

// Set value for port, both for local (3001) and process.env.port (use for Heroku)
const PORT = process.env.PORT || 3001;

// Require path functions
const path = require('path');

// Set app variable to express.js
const app = express();

// Middleware for JSON use
app.use(express.json());

//Middleware 
app.use(express.urlencoded({ extended: true }));

// Middleware for static files
app.use(express.static('public'));

// Require the routes for api and html
const apiRoutes = require('./routes/apiRoute');
const htmlRoutes = require('./routes/htmlRoute');

// Use the routes
app.use('/api', apiRoute);
app.use('/', htmlRoute);

// Listen on the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);