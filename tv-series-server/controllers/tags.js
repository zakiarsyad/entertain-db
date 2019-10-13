
const Tag = require('../models/tag')

class TagController {
    static findAll(req, res, next) {
        Tag.find()
            .then(tags => {
                res.status(200).json(tags)
            })
            .catch(next)
    }

    static findById(req, res, next) {
        const tag_id = req.params.id

        Tag.findById({ _id: tag_id })
            .then(tag => {
                res.status(200).json(tag)
            })
            .catch(next)
    }

    static create(req, res, next) {
        const { tags } = req.body

        Tag.create({ tags })
            .then(tag => {
                res.status(201).json(tag)
            })
            .catch(next)
    }

    static update(req, res, next) {
        const tag_id = req.params.id
        const { tags } = req.body

        Tag.findById(tag_id)
            .then(tag => {
                if (tags) tag.tags = tags

                return tag.save()
            })
            .then(tag => {
                res.status(200).json(tag)
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const tag_id = req.params.id

        Tag.findById(tag_id)
            .then(tag => {
                return tag.delete()
            })
            .then(tag => {
                res.status(200).json(tag)
            })
            .catch(next)
    }
}

module.exports = TagController