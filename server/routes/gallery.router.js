const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const pictureId = req.params.id; //grab :id
    const sqlText = `UPDATE gallery 
                     SET likes = (likes + 1) 
                     WHERE "id" = $1;`;
    pool.query(sqlText, [pictureId]) //send sql command and id
    .then((result) => {
        console.log('Successfully updated like count!')
        res.sendStatus(200); //OK
    }).catch((error) => {
        console.log('Error in PUT updating like count.', error);
        res.sendStatus(500); //error
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM gallery ORDER BY id DESC LIMIT 30;`;
    pool.query(sqlText) //send sql command
        .then((result) => {
            console.log(`Got stuff back from the database`, result.rows);
            res.send(result.rows); //send table rows to client
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
}); // END GET Route

// POST Route
router.post('/', (req, res) => {
    const image = req.body; //object
    const sqlText = `INSERT INTO gallery (path, description)
                     VALUES ($1, $2);`; //send sql command
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

// DELETE Route
router.delete('/:id', (req, res) => {
    const pictureID = req.params.id; //grab :id
    console.log('in delete route', pictureID);
    const sqlText = `DELETE FROM gallery WHERE "id" = $1;`;
    pool.query(sqlText, [pictureID]) //send sql command and id
    .then((result) => {
        console.log('Successfully deleted an item!')
        res.sendStatus(200); //OK
    }).catch((error) => {
        console.log('Error in DELETE route.', error);
        res.sendStatus(500); //error
    })
}); // END PUT Route

module.exports = router;