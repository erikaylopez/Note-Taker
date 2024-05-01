const path = require('path'); // import path module
const router = require('express').Router(); // import express router

router.get('/notes', (req, res) => { // get index
    res.sendFile(path.join(__dirname, '../../Develop/public/notes.html')); // send notes.html
});

router.get('*', (req, res) => { // get index
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html')); // send index.html
});

router.get('/', (req, res) => { // get index
    res.sendFile(path.join(__dirname, '../../Develop/public/index.html')); // send index.html
});     

module.exports = router; // export router