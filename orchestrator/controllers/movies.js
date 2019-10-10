
const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()
const bluebird = require('bluebird')
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

class MovieController {
    static async getAllMovies(req, res, next) {
        try {
            const movies = await client.getAsync('movies')
            if (movies) {
                res.status(200).json({ movies: JSON.parse(movies) })
            } else {
                const { data } = await axios.get('http://localhost:3001/movies')
                await client.setAsync('movies', JSON.stringify(data), 'EX', 24 * 60 * 60)
                res.status(200).json({ movies: data })
            }
        } catch (err) {
            next(err.message);
        }
    }

    static async getMovie(req, res, next) {
        const movie_id = req.params.id
        
        try {
            const movie = await client.getAsync(`movie/${movie_id}`)
            if (movie) {
                res.status(200).json({ movie: JSON.parse(movie) })
            } else {
                const { data } = await axios.get(`http://localhost:3001/movies/${movie_id}`)
                await client.setAsync(`movie/${movie_id}`, JSON.stringify(data), 'EX', 24 * 60 * 60)
                res.status(200).json({ movie: data })
            }
        } catch (err) {
            next(err.message);
        }
    }

    static async getFav(req, res, next) {
        try {
            const { data } = await axios.get(`http://localhost:3001/movies/fav`)
            res.status(200).json({ favorites: data })
        } catch (err) {
            next(err.message);
        }
    }

}

module.exports = MovieController