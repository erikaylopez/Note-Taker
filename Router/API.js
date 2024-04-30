const fs = require('fs'); // node.js file system module

const notes = require('../Develop/db/db.json'); // import reviews from db.json
const express = require('express'); // import express module
const router = require('express').Router(); // import express router
const path = require('path'); // import path module

const port = 3001; // port number

app.use(express.json()); // parse incoming JSON data


app.post('/api/notes', (req, res) => { // post reviews
    const newNote = req.body; // new review
    newNote.id = uniqid(); // add unique id to review
    
    reviews.push(newNote); // add new review to reviews
    fs.writeFileSync('../db/db.json', JSON.stringify(reviews)); // write reviews to db.json
    res.json(newNote); // return new review
});

app.get('/api/notes', (req, res) => { // get reviews
    res.json(reviews); // return reviews

});

fs.writeFile(__dirname + '/db/db.json', rawData, err => { // write reviews to db.json
    if (err) throw err; // throw error if error
    console.log('File written');
});

module.exports = router; // export router


