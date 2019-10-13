
const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()
const bluebird = require('bluebird')
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const server = 'http://localhost:3001'

class MovieController {
    static async findAll(req, res, next) {
        try {
            const movies = await client.getAsync('movies')
            if (movies) {
                res.status(200).json(JSON.parse(movies))
            } else {
                const { data } = await axios.get(`${server}/movies`)
                await client.setAsync('movies', JSON.stringify(data), 'EX', 24 * 60 * 60)
                res.status(200).json(data)
            }
        } catch (err) {
            next(err.message);
        }
    }

    static async finfById(req, res, next) {
        const movie_id = req.params.id
        
        try {
            const movie = await client.getAsync(`movie/${movie_id}`)
            if (movie) {
                res.status(200).json(JSON.parse(movie))
            } else {
                const { data } = await axios.get(`${server}/movies/${movie_id}`)
                await client.setAsync(`movie/${movie_id}`, JSON.stringify(data), 'EX', 24 * 60 * 60)
                res.status(200).json(data)
            }
        } catch (err) {
            next(err.message);
        }
    }

    static async create(req, res, next) {
        const { title, overview, poster_path, popularity, status, tags } = req.body

        try {
            const { data } = await axios({
                method: `post`,
                url: `${server}/movies`,
                data: { title, overview, poster_path, popularity, status, tags }
            })

            // update redis
            const movies = await axios.get(`${server}/movies`)
            await client.setAsync('movies', JSON.stringify(movies.data), 'EX', 24 * 60 * 60)

            res.status(201).json(data)
        } catch (err) {
            next (err.message)
        }
    }

    static async update(req, res, next) {
        const movie_id = req.params.id
        const { title, overview, poster_path, popularity, status, tags } = req.body

        try {
            const { data } = await axios({
                method: `patch`,
                url: `${server}/movies/${movie_id}`,
                data: { title, overview, poster_path, popularity, status, tags }
            })

            // update redis
            const movies = await axios.get(`${server}/movies`)
            await client.setAsync('movies', JSON.stringify(movies.data), 'EX', 24 * 60 * 60)

            res.status(200).json(data)
        } catch (err) {
            next(err.message)
        }
    }

    static async delete(req, res, next) {
        const movie_id = req.params.id

        try {
            const { data } = await axios({
                method: `delete`,
                url: `${server}/movies/${movie_id}`
            })

            // update redis
            const movies = await axios.get(`${server}/movies`)
            await client.setAsync('movies', JSON.stringify(movies.data), 'EX', 24 * 60 * 60)
            
            res.status(200).json(data)
        } catch (err) {
            next(err.message)
        }
    }
}

module.exports = MovieController