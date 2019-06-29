import Axios from "axios";

export const SET_MAIN_FILTER = 'SET_MAIN_FILTER'
export const FETCH_PLAYERS = 'FETCH_PLAYERS'
export const FETCHED_PLAYERS = 'FETCHED_PLAYERS'

export const MAIN_FILTERS = {
    PLAY_BY_TEAM:'PLAY_BY_TEAM',
    PLAYER_BY_POSITION:'PLAYER_BY_POSITION',
}

export const fetchPlayers = (dispatch) => {
    dispatch({type:FETCH_PLAYERS})
    Axios.get(
        'https://fantasy.premierleague.com/drf/elements'
    ).then(playersData=>{
        const players = playersData.map([player=>({id:player.id,firstName:player.first_name,secondName:player.second_name})])
        dispatch({type:FETCHED_PLAYERS, players})
    })
}