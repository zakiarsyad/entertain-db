
const Movie = require('../models/movie')

class MovieController {
    static findAll(req, res, next) {
        Movie.find().populate('tags')
            .then(movies => {
                res.status(200).json(movies)
            })
            .catch(next)
    }

    static findById(req, res, next) {
        const movie_id = req.params.id

        Movie.findById({ _id: movie_id }).populate('tag')
            .then(movie => {
                res.status(200).json(movie)
            })
            .catch(next)
    }
    
    static create(req, res, next) {
        const { title, overview, poster_path, popularity, tags, status } = req.body
        
        Movie.create({
            title, overview, poster_path, popularity, tags, status
        })
            .then(movie => {
                res.status(201).json(movie)
            })
            .catch(next)
    }

    static update(req, res, next) {
        const movie_id = req.params.id
        const { title, overview, poster_path, popularity, tags, status } = req.body
        
        console.log(movie_id)
        
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
                res.status(200).json(movie)
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const movie_id = req.params.id
        
        Movie.findById(movie_id)
            .then(movie => {
                return movie.delete()
            })
            .then(movie => {
                res.status(200).json(movie)
            })
            .catch(next)
    }
}

module.exports = MovieController

// const axios = require('axios')
// const movie_key = process.env.MOVIE_KEY

// static getAllMovies(req, res, next) {
//     axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${movie_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
//         .then(({ data }) => {
//             const movies = []

//             data.results.forEach(movie => {
//                 const singleMovie = {
//                     title: movie.title, 
//                     overview: movie.overview,
//                     poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
//                     popularity: movie.popularity,
//                     status: movie.adult ? 'adult' : 'all ages'
//                 }

//                 movies.push(singleMovie)
//             })

//             res.status(200).json(movies)
//         })
//         .catch(next)
// }

// static getMovie(req, res, next) {
//     const movie_id = req.params.id

//     axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${movie_key}&language=en-US`)
//         .then(({ data }) => {
//             const movie = {
//                 title: data.title,
//                 overview: data.overview,
//                 poster_path: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
//                 popularity: data.popularity,
//                 status: data.adult ? 'adult' : 'all ages'
//             }

//             res.status(200).json(movie)
//         })
//         .catch(next)
// }