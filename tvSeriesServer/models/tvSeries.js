
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tvSeriesSchema = new Schema({
    title: String,
    overview: String,
    poster_path: String,
    popularity: Number,
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }],
    status: String
}, { timestamps: true })

module.exports = mongoose.model('TvSeries', tvSeriesSchema)