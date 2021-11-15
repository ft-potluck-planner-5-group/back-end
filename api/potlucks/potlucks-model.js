const db = require('../data/db-config')

function find() {
    return db('potlucks')
}

function findById(potluck_id) {
    return db('potlucks').where({ potluck_id }).first()
}

async function del(potluck_id){
    const removedPotluck = await findById(potluck_id)
    await db('potlucks').where({ potluck_id }).del()
    return removedPotluck
}

module.exports = {
    find,
    findById,
    del
}
