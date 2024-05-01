const express = require('express'); // import express module
const router = require('express').Router(); // import express router
const notes = require('../../Develop/db/db.json'); // import reviews from db.json
const fs = require('fs'); // node.js file system module
const path = require('path'); // import path module


router.use(express.json()); // parse incoming JSON data


router.post('/notes', (req, res) => { // post reviews
    const newNote = req.body; // new review
    newNote.id = uniqid(); // add unique id to review
    
    reviews.push(newNote); // add new review to reviews
    fs.writeFileSync('../db/db.json', JSON.stringify(reviews)); // write reviews to db.json
    res.json(newNote); // return new review
});

router.get('/notes', (req, res) => { // get reviews
    res.json(reviews); // return reviews

});

fs.writeFile(path.join(__dirname, '../../Develop/db/db.json'), JSON.stringify(notes), (err) => {
    if (err) throw err;
    return console.log('The file has been saved!');

    console.log(successful);
  });


module.exports = router; // export router


