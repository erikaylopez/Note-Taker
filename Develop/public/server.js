const express = require('express'); // import express module
const apiRoutes = require('./Develop/Routes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 3001; // port number

const htmlRoutes = require('./Develop/Routes/htmlRoutes'); // import htmlRoutes module


app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming JSON data
app.use(express.static('./Develop/public')); // serve static files

app.use('/api', apiRoutes); // use api routes
app.use('/', htmlRoutes); // use html routes


app.listen(PORT, () => { // start server
  console.log(`API server now on port ${PORT}!`);
}); 

