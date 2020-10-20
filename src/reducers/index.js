import { combineReducers } from 'redux';
import { IMPORT_MEMES, NEW_MEMES } from '../actions';

function memes(state = [], action) {
    switch(action.type) {
        case IMPORT_MEMES:
            return action.memes
        default:
            return state;
    }
}

function myMemes(state = [], action) {
    switch(action.type) {
        case NEW_MEMES:
            state = [...state, action.meme];
            return state
        default:
            return state;
    }
}

const rootReducer = combineReducers({ memes, myMemes })

export default rootReducer;