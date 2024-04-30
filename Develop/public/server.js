const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming JSON data
app.use(express.static('public')); // serve static files

require('./routes/apiRoutes')(app); // api routes
require('./routes/htmlRoutes')(app); // html routes

app.listen(PORT, () => { // start server
  console.log(`API server now on port ${PORT}!`);
}); 

