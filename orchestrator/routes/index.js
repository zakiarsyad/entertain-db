
const router = require('express').Router()


router.get('/', (req, res) => {
    res.status(200).json({
        message: `App is running. . .`
    })
})

router.get('/movies', OrchestraController.getAllMovie)
router.get('/tv-series', OrchestraController.getAllTvSeries)

module.exports = router