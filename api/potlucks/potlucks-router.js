const router = require('express').Router()
const Potlucks = require('../potlucks/potlucks-model')
const { restricted } = require('../auth/auth-middleware')

router.get('/', restricted, (req, res, next) => {
    Potlucks.find()
})

module.exports = router
