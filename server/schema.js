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
    
    type Team {
        id: ID!
        name: String!
        selected: Boolean!
    }

    type Query {
        players(pageSize:Int after:String): PlayersConnection!
        playersByTeam(id: Int): [Player]
        teams:[Team]
    }

    type PlayersConnection {
        cursor: String!
        hasMore: Boolean!
        players: [Player]!
    }
`

module.exports = typeDefs
