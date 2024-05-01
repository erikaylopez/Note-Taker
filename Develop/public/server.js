const express = require('express'); // import express module
const routes = require('./Routes'); // import routes
const PORT = process.env.PORT || 3001; // port number

const app = express();


app.use(express.json()); // parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data


app.use(express.static('public')); // serve static files

app.use(routes); // use routes


app.listen(PORT, () => { // start server
  console.log(`API server now on port ${PORT}!`);
}); 

