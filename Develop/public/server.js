const express = require('express');
const apiRoutes = require('./apiRoutes'); // import apiRoutes module
const htmlRoutes = require('./htmlRoutes'); // import htmlRoutes module
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming JSON data
app.use(express.static('./Develop/public')); // serve static files

app.use(apiRoutes); // use api routes
app.use(htmlRoutes); // use html routes


app.listen(PORT, () => { // start server
  console.log(`API server now on port ${PORT}!`);
}); 

