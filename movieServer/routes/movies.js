
const router = require('express').Router()
const MovieController = require('../controllers/movies')

router.get('/', MovieController.findAll)
router.get('/:id', MovieController.findById)
router.post('/', MovieController.create)
router.patch('/:id', MovieController.update)
router.delete('/:id', MovieController.delete)

module.exports = router