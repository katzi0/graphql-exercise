import { SET_MAIN_FILTER } from '../actions/PlayerFilterActions'

const initalState = {
    mainFilter: null,
    playerPosition: null,
    playerValue: { min: null, max: null },
}

export default function PlayerFilterReducer(state = initalState, action) {
    if (state === 'undefined') {
        return initalState
    }
    switch (action.type) {
        case SET_MAIN_FILTER: {
            return { ...state, mainFilter: action.filter }
        }
    }
    return state
}
