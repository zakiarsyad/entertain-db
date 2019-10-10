
const router = require('express').Router()
const MovieController = require('../controllers/movies')

router.get('/', (req, res) => {
    res.status(200).json({
        message: `App is running. . .`
    })
})

router.get('/movies', MovieController.getAllMovies)
router.get('/movies/:id', MovieController.getMovie)
router.get('/movies/fav', MovieController.getFav)
router.post('/movies', MovieController.createfav)
router.patch('/movies/:id', MovieController.updateFav)
router.delete('/movies/:id', MovieController.deleteFav)

module.exports = router