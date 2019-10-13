
const router = require('express').Router()
const TvSeriesController = require('../controllers/tvSeries')

router.get('/', TvSeriesController.findAll)
router.get('/:id', TvSeriesController.finfById)
router.post('/', TvSeriesController.create)
router.patch('/:id', TvSeriesController.update)
router.delete('/:id', TvSeriesController.delete)

module.exports = router