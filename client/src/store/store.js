import {createStore} from 'redux'
import PlayerFilterReducer from '../reducers/PlayerFilterReducer'

const store = createStore(PlayerFilterReducer)
export default store
