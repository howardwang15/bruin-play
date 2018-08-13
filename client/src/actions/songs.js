export const ADD_NEW_SONG = 'ADD_NEW_SONG';
export const UPDATE_SONGS = 'UPDATE_SONGS';

export const UPDATE = 'UPDATE';

export const addNewSong = file => {
    return {
        type: ADD_NEW_SONG,
        payload: file
    }
}

export const updateSongs = songs => {
    return {
        type: UPDATE_SONGS,
        payload: songs
    }
}

