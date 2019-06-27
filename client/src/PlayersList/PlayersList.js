import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'


const PlayerList = () => {
    const getPlayersByTeam = gql`
        query {
            playersByTeam(id:1){
                id
                firstName
                secondName
            }
        }
    `
    return (
        <Query query={getPlayersByTeam}>

            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(</p>

                return data.playersByTeam.map(({ id, firstName, secondName }) => (
                    <div key={id}>
                        <p>{firstName} {secondName}</p>
                    </div>
                ))
            }}
        </Query>
    )

}

export default PlayerList
