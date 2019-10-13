
const router = require('express').Router()
const movieRouter = require('./movies')
const tvSeriesRouter = require('./tvSeries')

router.get('/', (req, res) => {
    res.status(200).json({
        message: `App is running. . .`
    })
})

router.use('/movies', movieRouter)
router.use('/tvseries', tvSeriesRouter)

module.exports = router