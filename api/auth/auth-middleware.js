const { JWT_SECRET } = require('../secrets')
const jwt = require('jsonwebtoken')
const Users = require('../users/users-model')

const restricted = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return next({ status: 401, message: 'Token required' })
    } else {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                next({ status: 401, message: 'Token invalid' })
            } else {
                req.decodedToken = decoded
                next()
            }
        })
    }
}

async function checkUsernameFree(req, res, next) {
    const { username } = req.body
    const user = await Users.findBy({ username: username })
    if (!user.length) {
        next()
    } else {
        next({ status: 422, message: 'Username taken' })
    }
}

async function checkUsernameExists(req, res, next) {
    const { username } = req.body
    const user = await Users.findBy({ username: username })
    if (!user) {
        next({ status: 422, message: 'Invalid credentials' })
    } else {
        req.user = user
        next()
    }
}

module.exports = {
    restricted,
    checkUsernameFree,
    checkUsernameExists
}
