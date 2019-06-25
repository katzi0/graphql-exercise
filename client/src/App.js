import './App.css'
import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import PlayerList from './playersList/PlayersList'

const client = new ApolloClient({ uri: 'http://172.18.154.17:4000/' })
const App = () => (
    <ApolloProvider client={client}>
        <div>
            <h2>My first Apollo app 🚀</h2>
            <PlayerList />
        </div>
    </ApolloProvider>
)

export default App
