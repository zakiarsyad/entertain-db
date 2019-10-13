const { ApolloServer, gql, makeExecutableSchema, PubSub } = require('apollo-server')

const MoviesAPI = require('./datasources/movies')
const TvSeriesAPI = require('./datasources/tvSeries')

const pubsub = new PubSub()

const typeDefs = gql`
    type Query {
        movies: [Movie]
        tvseries: [TvSeries]
    }

    type Subscription {
        movieUpdated: Movie

        tvseriesUpdated: TvSeries
    }

    type Mutation {
        createMovie ( tags: [String], title: String, overview: String, poster_path: String, popularity: String, status: String ): Movie

        updateMovie ( _id: String, tags: [String], title: String, overview: String, poster_path: String, popularity: String, status: String ): Movie

        deleteMovie ( _id: String ): Movie

        createTvSeries ( tags: [String], title: String, overview: String, poster_path: String, popularity: String, status: String ): TvSeries

        updateTvSeries ( _id: String, tags: [String], title: String, overview: String, poster_path: String, popularity: String, status: String ): TvSeries

        deleteTvSeries ( _id: String ): TvSeries
    }

    type Movie {
        tags: [String]
        _id: ID
        title: String
        overview: String
        poster_path: String
        popularity: String
        status: String
        createdAt: String
        updatedAt: String
    }

    type TvSeries {
        tags: [String]
        _id: ID
        title: String
        overview: String
        poster_path: String
        popularity: String
        status: String
        createdAt: String
        updatedAt: String
    }
`

const resolvers = {
    Query: {
        movies: (parent, args, context) => {
            const { dataSources: { movies } } = context
            return movies.findAll()
        },

        tvseries: (parent, args, context) => {
            const { dataSources: { tvseries } } = context
            return tvseries.findAll()
        }
    },

    Subscription: {
        movieUpdated: {
            subscribe: () => pubsub.asyncIterator('movieUpdated')
        },

        tvseriesUpdated: {
            subscribe: () => pubsub.asyncIterator('tvseriesUpdated')
        }
    },

    Mutation: {
        createMovie: (parent, args, context) => {
            console.log(args)
            const { dataSources: { movies } } = context
            movies.create(args)
            return pubsub.publish('movieUpdated', { movieUpdated: args })
        },

        updateMovie: (parent, args, context) => {
            const { dataSources: { movies } } = context
            movies.update(args)
            return pubsub.publish('movieUpdated', { movieUpdated: args })
        },

        deleteMovie: (parent, args, context) => {
            const { dataSources: { movies } } = context
            movies.destroy(args)
            return pubsub.publish('movieUpdated', { movieUpdated: args })
        },

        createTvSeries: (parent, args, context) => {
            const { dataSources: { tvseries } } = context
            tvseries.create(args)
            return pubsub.publish('tvseriesUpdated', { tvseriesUpdated: args })
        },

        updateTvSeries: (parent, args, context) => {
            const { dataSources: { tvseries } } = context
            tvseries.update(args)
            return pubsub.publish('tvseriesUpdated', { tvseriesUpdated: args })
        },

        deleteTvSeries: (parent, args, context) => {
            const { dataSources: { tvseries } } = context
            tvseries.destroy(args)
            return pubsub.publish('tvseriesUpdated', { tvseriesUpdated: args })
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs: [typeDefs],
    resolvers: [resolvers]
})

const server = new ApolloServer({
    schema,
    dataSources: () => {
        return {
            movies: new MoviesAPI(),
            tvseries: new TvSeriesAPI()
        }
    }
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})