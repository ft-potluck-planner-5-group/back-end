const db = require('../data/db-config')

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter).select('*')
}

function findById(user_id) {
    return db('users').where({ user_id }).first()
}

async function add(newUser) {
    const [user] = await db('users').insert(newUser, ['user_id', 'username'])
    return user
}

module.exports = {
    find,
    findBy,
    findById,
    add
}
