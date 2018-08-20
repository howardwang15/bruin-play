import { put, takeLatest, select, all } from 'redux-saga/effects';
import { UPDATE_SONGS, ADD_NEW_SONG, UPDATE_SUCCEEDED, PLAY_SONG, PLAY_SONG_SUCCEEDED } from '../actions/songs';
import { playingSong } from '../selectors';

function getSong(song) {
    fetch('http://localhost:3000/songs', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ data: song })
    }) 
};

function *updateSongs(action) {
    yield put({ type: UPDATE_SUCCEEDED, payload: { data: action.payload.songs }});
}

function *playSong(action) {
    const currentSong = yield select(playingSong);
    const name = action.payload.name.replace(/\s+/g, '') + '.mp3';
    const url = `https://storage.googleapis.com/howardwang15/BruinPlay/${name}`;
    if (currentSong && action.payload.name === currentSong.name) {
        action.payload;
        yield put({type: PLAY_SONG_SUCCEEDED, payload: { currentPlaying: null, url: null }});
    } 
    else {
        yield all([put({ type: PLAY_SONG_SUCCEEDED, payload: { currentPlaying: null, url: null}}), put({ type: PLAY_SONG_SUCCEEDED, payload: { currentPlaying: action.payload, url }})]);
    }
}

export default function *songsSaga() {
    yield takeLatest(UPDATE_SONGS, updateSongs);
    yield takeLatest(PLAY_SONG, playSong);
}