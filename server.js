//dependencies
const express = require('express');
const path = require('path');
const app = express();
const apiRoutes = require('./routes/apiRoute');
const htmlRoutes = require('./routes/htmlRoute');
// port
const PORT = process.env.PORT || 3001;


// Middleware for JSON use
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Middleware for static files
app.use(express.static('public'));

// Use the routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listen on the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);