const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const itemId = req.params.id;
    const sqlText = `UPDATE gallery 
                     SET likes = (likes + 1) 
                     WHERE "id" = $1;`;
    pool.query(sqlText, [itemId])
    .then((result) => {
        console.log('Successfully updated like count!')
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in PUT updating like count.', error);
        res.sendStatus(500);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM gallery ORDER BY id DESC LIMIT 30;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    const image = req.body; //object
    console.log(image);
    
    const sqlText = `INSERT INTO gallery (path, description)
                     VALUES ($1, $2);`; //send 
    pool.query(sqlText, [image.path, image.description])
        .then((result) => {
            console.log(`Added image to the database`, image);
            res.sendStatus(201); //respond with 'Created'
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })



});

module.exports = router;