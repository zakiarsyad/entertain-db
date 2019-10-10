
const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()
const bluebird = require('bluebird')
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const server = 'http://localhost:3002'

class TvSeriesController {
    static async findAll(req, res, next) {
        try {
            const tvseries = await client.getAsync('tvseries')
            if (tvseries) {
                res.status(200).json(JSON.parse(tvseries))
            } else {
                const { data } = await axios.get(`${server}/tvseries`)
                await client.setAsync('tvseries', JSON.stringify(data), 'EX', 24 * 60 * 60)
                res.status(200).json(data)
            }
        } catch (err) {
            next(err.message);
        }
    }

    static async finfById(req, res, next) {
        const tv_series_id = req.params.id

        try {
            const tvseries = await client.getAsync(`tvseries/${tv_series_id}`)
            if (tvseries) {
                res.status(200).json(JSON.parse(tvseries))
            } else {
                const { data } = await axios.get(`${server}/tvseries/${tv_series_id}`)
                await client.setAsync(`tvseries/${tv_series_id}`, JSON.stringify(data), 'EX', 24 * 60 * 60)
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
                url: `${server}/tvseries`,
                data: { title, overview, poster_path, popularity, status, tags }
            })

            // update redis
            const tvSeries = await axios.get(`${server}/tvseries`)
            await client.setAsync('tvseries', JSON.stringify(tvSeries.data), 'EX', 24 * 60 * 60)

            res.status(201).json(data)
        } catch (err) {
            next(err.message)
        }
    }

    static async update(req, res, next) {
        const tv_series_id = req.params.id
        const { title, overview, poster_path, popularity, status, tags } = req.body

        try {
            const { data } = await axios({
                method: `patch`,
                url: `${server}/tvseries/${tv_series_id}`,
                data: { title, overview, poster_path, popularity, status, tags }
            })

            // update redis
            const tvSeries = await axios.get(`${server}/tvseries`)
            await client.setAsync('tvseries', JSON.stringify(tvSeries.data), 'EX', 24 * 60 * 60)

            res.status(200).json(data)
        } catch (err) {
            next(err.message)
        }
    }

    static async delete(req, res, next) {
        const tv_series_id = req.params.id

        try {
            const { data } = await axios({
                method: `delete`,
                url: `${server}/tvseries/${tv_series_id}`
            })

            // update redis
            const tvSeries = await axios.get(`${server}/tvseries`)
            await client.setAsync('tvseries', JSON.stringify(tvSeries.data), 'EX', 24 * 60 * 60)
            
            res.status(200).json(data)
        } catch (err) {
            next(err.message)
        }
    }
}

module.exports = TvSeriesController