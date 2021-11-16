const db = require('../data/db-config')

function find() {
    return db('potlucks')
}

function findById(potluck_id) {
    return db('potlucks').where({ potluck_id }).first()
}

async function add(newPotluck) {
    const [potluck] = await db('potlucks').insert(newPotluck, ['potluck_id', 'potluck_name', 'date', 'time', 'location'])
    return potluck
}

module.exports = {
    find,
    findById,
    add
}
