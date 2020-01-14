import {FETCH_USER} from '../actions/types'


const initialState = {
    user: {profileIconId: process.env.PUBLIC_URL + '/question_mark.png'}
}

export default function(state = initialState, action){
    switch (action.type) {
        case FETCH_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}