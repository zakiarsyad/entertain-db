
const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()
const bluebird = require('bluebird')
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

class OrchestraController {
    static async getAllMovie(req, res, next) {
        try {
            const movies = await client.getAsync('movies')
            if (movies) {
                res.status(200).json({ movies: JSON.parse(movies)})
            } else {
                const { data } = await axios.get('http://localhost:3001/movies')
                await client.setAsync('movies', JSON.stringify(data))
                res.status(200).json({ movies: data })
            }
        } catch (err) {
            next(err.message);
        }
    }

    static async getAllTvSeries(req, res, next) {
        try {
            const tvSeries = await client.getAsync('tvSeries')
            if (tvSeries) {
                res.status(200).json({ tvSeries: JSON.parse(tvSeries)})
            } else {
                const { data } = await axios.get('http://localhost:3002/tv-series')
                await client.setAsync('tvSeries', JSON.stringify(data))
                res.status(200).json({ tvSeries: data })
            }
        } catch (err) {
            next(err.message);
        }
    }
}

module.exports = OrchestraController