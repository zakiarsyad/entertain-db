import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities'
import { createUploadLink } from 'apollo-upload-client'

// const myUrl = 'localhost:4000'
const myUrl = '192.168.0.4:4000'

const client = new ApolloClient({
    link: split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        new WebSocketLink({
            uri: `ws://${myUrl}/graphql`,
            options: {
                reconnect: true
            }
        }),
        new HttpLink({
            uri: `http://${myUrl}`,
            credentials: 'same-origin'
        }),
    ),
    cache: new InMemoryCache()
});

export const uploadClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: createUploadLink({ uri: `http://${myUrl}` })
})

export default client