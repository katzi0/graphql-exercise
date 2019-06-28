export const SET_MAIN_FILTER = 'SET_MAIN_FILTER'

export const MAIN_FILTERS = {
    PLAY_BY_TEAM:'PLAY_BY_TEAM',
    PLAYER_BY_POSITION:'PLAYER_BY_POSITION',
}

export function setMainFilter(filter){
    return {type:SET_MAIN_FILTER, filter}
}
