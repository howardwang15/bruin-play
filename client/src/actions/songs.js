export const ADD_NEW_SONG = 'ADD_NEW_SONG';
export const UPDATE_SONGS = 'UPDATE_SONGS';
export const PLAY_SONG = 'PLAY_SONG';
export const DOWNLOAD_SONG = 'DOWNLOAD_SONG'; 
export const SORT_SONGS = 'SORT_SONGS';

export const UPDATE_SUCCEEDED = 'UPDATE_SUCCEEDED';
export const PLAY_SONG_SUCCEEDED = 'PLAY_SONG_SUCCEEDED';
export const DOWNLOAD_SUCCEEDED = 'DOWNLOAD_SUCCEEDED';
export const SORT_SONGS_SUCCEEDED = 'SORT_SONGS_SUCCEEDED';

export const addNewSong = file => {
    return {
        type: ADD_NEW_SONG,
        payload: file
    };
}

export const updateSongs = songs => {
    return {
        type: UPDATE_SONGS,
        payload: songs
    };
}

export const downloadSong = song => {
    return {
        type: DOWNLOAD_SONG,
        payload: song
    };
}

export const playSong = song => {
    return {
        type: PLAY_SONG,
        payload: song
    };
}

export const sortSongs = method => {
    return {
        type: SORT_SONGS,
        payload: method
    };
}

