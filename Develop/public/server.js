const express = require('express'); // import express module
const app = express();
const fs = require('fs'); // node.js file system module
const database = require('./Develop/db/db.json'); // import reviews from db.json

const PORT = process.env.PORT || 3001; // port number

app.use(express.static('public')); // serve static files


app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming JSON data


app.use('/api', apiRoutes); // use api routes
app.use('/', htmlRoutes); // use html routes


app.listen(PORT, () => { // start server
  console.log(`API server now on port ${PORT}!`);
}); 

