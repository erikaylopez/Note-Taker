const uuid = require('uuid'); // npm package for unique id
const fs = require('fs'); // node.js file system module

const reviews = require('../db/db.json'); // import reviews from db.json
const { raw } = require('body-parser');
const { error } = require('console');
const port = 3001; // port number
const app = express(); // express app

app.get('/api/notes', (req, res) => { // get reviews
    res.json(noteData);

});

app.post('/api/notes', (req, res) => { // post reviews
    const newNote = req.body;
    newNote.id = uuid();
    
    noteData.push(newNote);
    fs.writeFileSync('../db/db.json', JSON.stringify(noteData));
    res.json(newNote);
});

fs.writeFileSync(__dirname + '/db/db.json', rawData, (err)) => {
    if (err) throw err;
    console.log('File written');
};


