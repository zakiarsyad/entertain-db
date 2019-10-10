
const router = require('express').Router()
const TvSeriesController = require('../controllers/tvSeries')

router.get('/', (req, res) => {
    res.status(200).json({
        message: `App is running. . .`
    })
})

router.get('/tv-series', TvSeriesController.getAllTvSeries)
router.get('/tv-series/:id', TvSeriesController.getTvSeries)
router.get('/tv-series/fav', TvSeriesController.getFav)
router.post('/tv-series', TvSeriesController.createfav)
router.patch('/tv-series/:id', TvSeriesController.updateFav)
router.delete('/tv-series/:id', TvSeriesController.deleteFav)

module.exports = router