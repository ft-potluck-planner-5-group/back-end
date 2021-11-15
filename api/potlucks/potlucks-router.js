const router = require('express').Router()
const Potlucks = require('../potlucks/potlucks-model')
const { restricted } = require('../auth/auth-middleware')

router.get('/', restricted, (req, res, next) => {
    Potlucks.find()
        .then(potlucks => {
            res.json(potlucks)
        })
        .catch(next)
})

router.get('/:potluck_id', restricted, (req, res, next) => {
    Potlucks.findById(req.params.potluck_id)
        .then(potluck => {
            res.json(potluck)
        })
        .catch(next)
})

module.exports = router
