

const axios = require('axios')
const TvSeries = require('../models/tvSeries')
const tv_series_key = process.env.TV_SERIES_KEY

class TvSeriesController {
    static getAllTvSeries(req, res, next) {
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${tv_series_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`)
            .then(({ data }) => {
                res.status(200).json({ tvSeries: data.results })
            })
            .catch(next)
    }

    static getTvSeries(req, res, next) {
        const tv_series_id = req.params.id

        axios.get(`https://api.themoviedb.org/3/tv/${tv_series_id}?api_key=${tv_series_key}&language=en-US`)
            .then(({ data }) => {
                res.status(200).json({ tvSeries: data })
            })
            .catch(next)
    }

    static getFav(req, res, next) {
        TvSeries.find()
            .then(tvSeries => {
                res.status(200).json({ tvSeries })
            })
            .catch(next)
    }

    static createfav(req, res, next) {
        const { title, overview, poster_path, popularity, tags, status } = req.body

        TvSeries.create({
            title, overview, poster_path, popularity, tags, status
        })
            .then(tvSeries => {
                res.status(201).json({ tvSeries })
            })
            .catch(next)
    }

    static updateFav(req, res, next) {
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
                res.status(200).json({ tvSeries })
            })
            .catch(next)
    }

    static deleteFav(req, res, next) {
        const tv_series_id = req.params.id

        TvSeries.findById(tv_series_id)
            .then(tvSeries => {
                return tvSeries.delete()
            })
            .then(tvSeries => {
                res.status(200).json({ tvSeries })
            })
            .catch(next)
    }
}

module.exports = TvSeriesController