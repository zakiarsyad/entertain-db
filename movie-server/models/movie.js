
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: String,
    overview: String,
    poster_path: String,
    popularity: String,
    tags: [String],
    status: String
}, { timestamps: true } )

module.exports = mongoose.model('Movie', movieSchema)