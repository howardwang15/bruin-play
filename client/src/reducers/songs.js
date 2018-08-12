import { ADD_NEW_SONG } from '../actions/songs'; 

export default (state, action) => {
    switch (action.type) {
        case ADD_NEW_SONG:
            return { ...state, songs: action.payload }
        default: 
            return state;
    }
}