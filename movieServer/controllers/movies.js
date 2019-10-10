
const axios = require('axios')
const Movie = require('../models/movie')
const movie_key = process.env.MOVIE_KEY

class MovieController {
    static getAllMovies(req, res, next) {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${movie_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(({ data }) => {
                res.status(200).json({ movies: data.results })
            })
            .catch(next)
    }

    static getMovie(req, res, next) {
        const movie_id = req.params.id

        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${movie_key}&language=en-US`)
            .then(({ data }) => {
                res.status(200).json({ movie: data })
            })
            .catch(next)
    }

    static getFav(req, res, next) {
        Movie.find()
            .then(movies => {
                res.status(200).json({ movies })
            })
            .catch(next)
    }
    
    static createfav(req, res, next) {
        const { title, overview, poster_path, popularity, tags, status } = req.body
        
        Movie.create({
            title, overview, poster_path, popularity, tags, status
        })
            .then(movie => {
                res.status(201).json({ movie })
            })
            .catch(next)
    }

    static updateFav(req, res, next) {
        const movie_id = req.params.id
        const { title, overview, poster_path, popularity, tags, status } = req.body

        Movie.findById(movie_id)
            .then(movie => {
                if (title) movie.title = title
                if (overview) movie.overwrite = overview
                if (poster_path) movie.poster_path = poster_path
                if (popularity) movie.popularity = popularity
                if (tags) movie.tags = tags
                if (status) movie.status = status

                return movie.save()
            })
            .then(movie => {
                res.status(200).json({ movie })
            })
            .catch(next)
    }

    static deleteFav(req, res, next) {
        const movie_id = req.params.id
        
        Movie.findById(movie_id)
            .then(movie => {
                return movie.delete()
            })
            .then(movie => {
                res.status(200).json({ movie })
            })
            .catch(next)
    }
}

module.exports = MovieController