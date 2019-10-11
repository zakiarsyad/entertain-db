
const router = require('express').Router()
const tvSeriesRouter = require('./tvSeries')
const tagRouter = require('./tags')

router.get('/', (req, res) => {
    res.status(200).json({
        message: `App is running. . .`
    })
})

router.use('/tvseries', tvSeriesRouter)
router.use('/tags', tagRouter)

module.exports = router