const express = require('express')
const db = require('../controller/dbController')

const app = express.Router()

app.patch('/notes', (req, res) => {
    const body = req.body
    const id = body.id
    const parsedId = parseInt(id)
    const isIdAvailable = db.get(id)
    if (isIdAvailable) {
        db.edit(id, body)
        res.send(body)
    } else {
        res.status(404).send("Data not Found, you insert an id in query that's not available in database")
    }
})

module.exports = app