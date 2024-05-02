//dependencies
const router = require('express').Router();
const fs = require('fs');
const uuid = require('./helpers/uuid');

// Handle GET of existing notes, to populate on page
router.get('/notes', function (req, res) {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        res.send(dbData);
    });
});

// Handle the POST of new notes when user clicks save
router.post('/notes', function (req, res) {
    const userNotes = req.body;

    fs.readFile('./db./db.json', (err, data) => {
        if (err) throw err;
        dbData = JSON.parse(data);
        dbData.push(userNotes);
        dbData.forEach((note, index) => {
            note.id = uuid();
            return dbData;
        });
        console.log(dbData);

        stringData = JSON.stringify(dbData);

        fs.writeFile('./db/db.json', stringData, (err, data) => {
            if (err) throw err;
        });
    });
    res.send('Note Added');
});


// Handle the DELETE of notes when user clicks delete
router.delete('/notes/:id', function (req, res) {

    // Get the id of the note to delete
    const deleteNote = req.params.id;
    console.log(`Delete note ID: ${deleteNote}`);

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;

        // Parse the data to get an array of the objects
        dbData = JSON.parse(data);

        // Loop through the array and find the object with the matching ID
        for (let i = 0; i < dbData.length; i++) {
            if (dbData[i].id === deleteNote) {
                dbData.splice([i], 1);
            }
        }
        console.log(dbData);
        stringData = JSON.stringify(dbData);

        fs.writeFile('./db/db.json', stringData, (err, data) => {
            if (err) throw err;
        });
    });

    // Send response
    res.status(204).send();
});

// Export
module.exports = router;