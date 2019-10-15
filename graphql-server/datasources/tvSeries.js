const { RESTDataSource } = require('apollo-datasource-rest')

class TvSeriesAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'http://35.240.149.155/'
    }

    async findAll() {
        return await this.get('tvseries')
    }

    async create(args) {
        return await this.post('tvseries', args)
    }

    async update(args) {
        const { _id, ...rest } = args
        return await this.patch(`tvseries/${_id}`, rest)
    }

    async destroy(args) {
        return await this.delete(`tvseries/${args._id}`)
    }
}

module.exports = TvSeriesAPI