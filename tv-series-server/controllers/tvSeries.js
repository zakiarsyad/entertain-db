
const TvSeries = require('../models/tvSeries')

class TvSeriesController {
    static findAll(req, res, next) {
        TvSeries.find()
            .then(tvSeries => {
                res.status(200).json(tvSeries)
            })
            .catch(next)
    }

    static findById(req, res, next) {
        const tv_series_id = req.params.id

        TvSeries.findById({ _id: tv_series_id })
            .then(tvSeries => {
                res.status(200).json(tvSeries)
            })
            .catch(next)
    }

    static create(req, res, next) {
        const { title, overview, poster_path, popularity, tags, status } = req.body

        TvSeries.create({
            title, overview, poster_path, popularity, tags, status
        })
            .then(tvSeries => {
                res.status(201).json(tvSeries)
            })
            .catch(next)
    }

    static update(req, res, next) {
        const tv_series_id = req.params.id
        const { title, overview, poster_path, popularity, tags, status } = req.body

        TvSeries.findById(tv_series_id)
            .then(tvSeries => {
                if (title) tvSeries.title = title
                if (overview) tvSeries.overwrite = overview
                if (poster_path) tvSeries.poster_path = poster_path
                if (popularity) tvSeries.popularity = popularity
                if (tags) tvSeries.tags = tags
                if (status) tvSeries.status = status

                return tvSeries.save()
            })
            .then(tvSeries => {
                res.status(200).json(tvSeries)
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const tv_series_id = req.params.id

        TvSeries.findById(tv_series_id)
            .then(tvSeries => {
                return tvSeries.delete()
            })
            .then(tvSeries => {
                res.status(200).json(tvSeries)
            })
            .catch(next)
    }
}

module.exports = TvSeriesController