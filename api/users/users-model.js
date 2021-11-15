const db = require('../data/db-config')

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter)
}

function findById(user_id) {
    return db('users').where('user_id', user_id).first()
}

async function add(newUser) {
    const [user] = await db('users').insert(newUser)
    return user
}

module.exports = {
    find,
    findBy,
    findById,
    add
}
