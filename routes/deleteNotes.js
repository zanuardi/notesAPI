const express = require('express')
const db = require('../controller/dbController')

const app = express.Router()

app.delete('/notes', (req, res) => {
    const query = req.query
    const id = query.id
    const isIdAvailable = db.get(id)
    if (isIdAvailable) {
        res.status(404).send("Data not Found, you insert an id in query that's not available in database")
    } else {
        db.remove(id)
        res.send('OK')
    }
})

module.exports = app


