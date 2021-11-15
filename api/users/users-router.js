const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { checkUsernameFree, checkUsernameExists } = require('../auth/auth-middleware')
const { JWT_SECRET } = require('../secrets')
const Users = require('./users-model')

router.post('/register', checkUsernameFree, (req, res, next) => {
    const { username, password } = req.body
    const rounds = process.env.BCRYPT_ROUNDS || 8
    const hash = bcrypt.hashSync(password, rounds)
    Users.add({ username, password: hash })
        .then(newUser => {
            res.status(201).json({
                user: newUser.user,
                username: newUser.username
            })
        })
        .catch(next)
})

router.post('/login', checkUsernameExists, (req, res, next) => {
    if (bcrypt.compareSync(req.body.password, req.user.password)) {
        const token = tokenBuilder(req.user)
        res.json({
            message: `Welcome, ${req.user.username}`,
            token
        })
    } else {
        next({ status: 401, message: 'Invalid credentials' })
    }
})

function tokenBuilder(user) {
    const payload = {
        subject: user.user_id,
        username: user.username,
        password: user.password
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = router
