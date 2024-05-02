// Purpose: HTML Routes for the application
const path = require('path');

// Require express.js
const router = require('express').Router();

// GET Route for /notes
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for all other pages
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Export 
module.exports = router;