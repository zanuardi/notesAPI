const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ notes: [] })
    .write()

function get(id) {
    const parsedId = parseInt(id)
    return db
        .get('notes')
        .find({ id })
        .value()
}

function getAll() {
    return db
        .get('notes')
        .value()
}

function add(body) {
    db.get('notes')
        .push(body)
        .write()
}

function edit(id, body) {
    const parsedId = parseInt(id)
    db.get('notes')
        .find({ id: parsedId })
        .assign(body)
        .write()
}

function remove(id) {
    const parsedId = parseInt(id)
    db.get('notes')
        .remove({ id: parsedId })
        .write()
}

const functions = {
    get,
    getAll,
    add,
    edit,
    remove
}

module.exports = functions 