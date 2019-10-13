
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: String,
    overview: String,
    poster_path: String,
    popularity: String,
    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }],
    status: String,
    backdrop_path: String,
    vote_average: String,
    release_date: String
}, { timestamps: true } )

module.exports = mongoose.model('Movie', movieSchema)