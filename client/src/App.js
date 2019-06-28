import './App.css'
import React from 'react'
import PlayerList from './PlayersList/PlayersList'
import Header from './Header/Header'
import ButtonAppBar from './AppBar/AppBar'
import store from './store/store'
import { Provider } from 'react-redux'


const App = () => (
        <div>
            <ButtonAppBar/>
            <Header/>
            <PlayerList/>
        </div>
)

export default App
