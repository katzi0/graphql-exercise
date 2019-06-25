import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost'
import { gql } from "apollo-boost"

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const client = new ApolloClient({uri:"http://172.18.154.17:4000/"})

// or you can use `import gql from 'graphql-tag';` instead

client
.query({
    query: gql`
        {
            players{
                players{
                    id
                }
            }
        }
    `
})
.then(result => console.log(result));


serviceWorker.unregister();
