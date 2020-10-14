const express = require('express')
const bodyParser = require('body-parser')
const getNotes = require('./routes/getNotes')
const addNotes = require('./routes/addNotes')
const editNotes = require('./routes/editNotes')
const deleteNotes = require('./routes/deleteNotes')

const app = express()
app.use(bodyParser.json())
app.use(getNotes)
app.use(addNotes)
app.use(editNotes)
app.use(deleteNotes)

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3000)