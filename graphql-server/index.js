const { ApolloServer, gql, makeExecutableSchema, PubSub } = require('apollo-server')

const pubsub = new PubSub()
const MoviesAPI = require('./datasources/movies')
const TvSeriesAPI = require('./datasources/tvSeries')

const typeDefs = gql`
    type Query {
        movies: [Movie]
        tvseries: [TvSeries]
    }

    # type Subscription {
    #     moviesx: [Movie]
    # }

    type Mutation {
        createMovie ( tags: [String], title: String, overview: String, poster_path: String, popularity: String, status: String, backdrop_path: String, vote_average: String, release_date: String ): Movie

        updateMovie ( _id: String, tags: [String], title: String, overview: String, poster_path: String, popularity: String, status: String, backdrop_path: String, vote_average: String, release_date: String ): Movie

        deleteMovie ( _id: String ): Movie

        createTvSeries ( tags: [String], title: String, overview: String, poster_path: String, popularity: String, status: String, backdrop_path: String, vote_average: String, release_date: String ): TvSeries

        updateTvSeries ( _id: String, tags: [String], title: String, overview: String, poster_path: String, popularity: String, status: String, backdrop_path: String, vote_average: String, release_date: String ): TvSeries

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
        backdrop_path: String
        vote_average: String
        release_date: String
        createdAt: String
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

    // Subscription: {
    //     moviesx: {
    //         subscribe: () => pubsub.asyncIterator(['XXX'])
    //     }
    // },

    Mutation: {
        createMovie: (parent, args, context) => {
            const { dataSources: { movies } } = context
            return movies.create(args)
        },

        updateMovie: (parent, args, context) => {
            const { dataSources: { movies } } = context
            return movies.update(args)
        },

        deleteMovie: (parent, args, context) => {
            const { dataSources: { movies } } = context
            return movies.destroy(args)
        },

        createTvSeries: (parent, args, context) => {
            const { dataSources: { tvseries } } = context
            return tvseries.create(args)
        },

        updateTvSeries: (parent, args, context) => {
            const { dataSources: { tvseries } } = context
            return tvseries.update(args)
        },

        deleteTvSeries: (parent, args, context) => {
            const { dataSources: { tvseries } } = context
            return tvseries.destroy(args)
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