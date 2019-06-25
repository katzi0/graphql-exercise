const { gql } = require('apollo-server')

const typeDefs = gql`
    type Player {
        id: ID!
        photo: String
        team_code: Int
        firstName: String
        secondName: String
        squadNumber: Int
        team: String
    }

    type Query {
        players(pageSize:Int after:String): PlayersConnection!
        playersByTeam(id: Int): [Player]
    }

    type PlayersConnection {
        cursor: String!
        hasMore: Boolean!
        players: [Player]!
    }
`

module.exports = typeDefs
