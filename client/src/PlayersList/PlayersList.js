import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'


const PlayerList = () => (
    <Query
        query={gql`
            {
                players{
                    players{
                      id
                    }
                }
            }
`}
        variables={{
            offset: 0,
            limit: 10
        }}
        fetchPolicy="cache-and-network">
        {({ loading, error, data, fetchMore }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Error :(</p>

            return data.players.players.map(({ id }) => (
                <div key={id}>
                    <p>{id}</p>
                </div>
            ))
        }}

    </Query>
)

export default PlayerList
