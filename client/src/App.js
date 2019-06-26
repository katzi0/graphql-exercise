import './App.css'
import React from 'react'
import ApolloClient, { InMemoryCache, gql } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import PlayerList from './PlayersList/PlayersList'
import Header from './Header/Header'
import ButtonAppBar from './AppBar/AppBar'

const client = new ApolloClient({ 
    uri: 'http://localhost:5000/', 
    cache: new InMemoryCache(), 
    resolvers:{
        Mutation: {
            toggleTodo: (_root, variables, { cache, getCacheKey }) => {
              const id = getCacheKey({ __typename: 'TodoItem', id: variables.id })
              const query = gql`
                query completeTodo {
                  completed
                }
              `;
              const todo = cache.readQuery({ query, id });
              const data = { ...todo, completed: !todo.completed };
              cache.writeData({ id, data });
              return null;
            },
          },

} })
const App = () => (
    <ApolloProvider client={client}>
        <div>
            <ButtonAppBar />
            <Header />
            <PlayerList />
        </div>
    </ApolloProvider>
)

export default App
