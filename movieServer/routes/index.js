
const router = require('express').Router()
const movieRouter = require('./movies')
const tagRouter = require('./tags')

router.get('/', (req, res) => {
    res.status(200).json({
        message: `App is running. . .`
    })
})

router.use('/movies', movieRouter)
router.use('/tags', tagRouter)

module.exports = router