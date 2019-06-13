// import { ApolloServer, gql } from 'apollo-server'
const { ApolloServer, gql } = require('apollo-server')
const PremierLeaugeAPI = require('./datasources/premierLeaugeAPI')
const resolvers = require('./resolvers')
const typeDefs = require('./schema')


const server = new ApolloServer({
    typeDefs, resolvers, dataSources: () => ({
        premierLeaugeAPI: new PremierLeaugeAPI()
    })
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
