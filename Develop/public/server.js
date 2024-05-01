const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; // port number

const apiRoutes = require('./api'); // import apiRoutes module
const htmlRoutes = require('./htmlRoutes'); // import htmlRoutes module


app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming JSON data
app.use(express.static('./Develop/public')); // serve static files

app.use('/api', Routes); // use api routes
app.use('/', htmlRoutesRoutes); // use html routes


app.listen(PORT, () => { // start server
  console.log(`API server now on port ${PORT}!`);
}); 

