const db = require('../data/db-config')

function find() {
    return db('potlucks')
}

function findById(potluck_id) {
    return db('potlucks').where({ potluck_id }).first()
}

module.exports = {
    find,
    findById
}
