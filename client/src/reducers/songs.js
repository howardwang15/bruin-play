import { ADD_NEW_SONG, UPDATE } from '../actions/songs'; 

export default (state = {data: []}, action) => {
    switch (action.type) {
        case ADD_NEW_SONG:
            return { ...state, data: action.payload }
        case UPDATE:
            console.log('updating');
            return { ...state, data: action.payload }
        default: 
            return state;
    }
}