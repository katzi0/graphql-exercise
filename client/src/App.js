import './App.css'
import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import PlayerList from './PlayersList/PlayersList'
import Header from './Header/Header'
import ButtonAppBar from './AppBar/AppBar'

const client = new ApolloClient({
    uri: 'http://172.18.154.17:5000/',
    cache: new InMemoryCache(),
    resolvers:{

    }
})
const App = () => (
    <ApolloProvider client={client}>
        <div>
            <ButtonAppBar/>
            <Header/>
            <PlayerList/>
        </div>
    </ApolloProvider>
)

export default App
