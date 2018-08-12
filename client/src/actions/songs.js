export const ADD_NEW_SONG = 'ADD_NEW_SONG';

export const addNewSong = file => {
    return {
        type: ADD_NEW_SONG,
        payload: file
    }
}