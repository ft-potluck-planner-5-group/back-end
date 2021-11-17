const db = require('../data/db-config')

function find() {
    return db('potlucks')
}

function findById(potluck_id) {
    return db('potlucks').where({ potluck_id }).first()
}

async function add(newPotluck) {
    const [potluck] = await db('potlucks').insert(newPotluck, ['potluck_id', 'potluck_name', 'date', 'time', 'location', 'imageUrl', 'instructions'])
    return potluck
}

function addItem(potluck_id, newItem) {
    return db('items').insert({
        ...newItem,
        potluck_id
    })
        .then(() => {
        return db('items as i')
            .join('potlucks as p', 'p.potluck_id', 'i.potluck_id')
            .select('i.*', 'p.potluck_name')
            .orderBy('item_id')
            .where('p.potluck_id', potluck_id)
        })
}

module.exports = {
    find,
    findById,
    add,
    addItem
}
