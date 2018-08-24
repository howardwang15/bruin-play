import { ADD_NEW_SONG, UPDATE_SUCCEEDED, PLAY_SONG_SUCCEEDED } from '../actions/songs'; 

export default (state = { data: [] }, action) => {
    switch (action.type) {
        case ADD_NEW_SONG:
            return { ...state, data: action.payload };
        case UPDATE_SUCCEEDED:
            return { ...state, ...action.payload };
        case PLAY_SONG_SUCCEEDED:
            return { ...state, ...action.payload };
        default: 
            return state;
    }
}