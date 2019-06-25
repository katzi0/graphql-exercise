import { ApolloClient } from 'apollo-boost'
import { gql } from "apollo-boost"


const client = new ApolloClient({ uri: "http://localhost:4000/graphql" })

// or you can use `import gql from 'graphql-tag';` instead

client
.query({
    query: gql`
        {
            getPlayersByTeamID {
                firstName
            }
        }
    `
})
.then(result => console.log(result));
