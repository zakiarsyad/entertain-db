const { RESTDataSource } = require('apollo-datasource-rest')

class MoviesAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'http://localhost:3001/'
    }

    async findAll() {
        return await this.get('movies')
    }

    async create(args) {
        return await this.post('movies', args)
    }

    async update(args) {
        const { _id, ...rest } = args
        return await this.patch(`movies/${_id}`, rest)
    }

    async destroy(args) {
        return await this.delete(`movies/${args._id}`)
    }
}

module.exports = MoviesAPI