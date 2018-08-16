import { put, takeLatest, select } from 'redux-saga/effects';
import { UPDATE_SONGS, ADD_NEW_SONG, UPDATE_SUCCEEDED, PLAY_SONG, PLAY_SONG_SUCCEEDED } from '../actions/songs';
import { playingSong } from '../selectors';

function *updateSongs(action) {
    yield put({ type: UPDATE_SUCCEEDED, payload: action.payload });
}

function *playSong(action) {
    const currentSong = yield select(playingSong);
    if (currentSong && action.payload.name === currentSong.name) {
        yield put({type: PLAY_SONG_SUCCEEDED, payload: { currentPlaying: null }});
    } 
    else {
        yield put({ type: PLAY_SONG_SUCCEEDED, payload: { currentPlaying: action.payload }})
    }
}

export default function *songsSaga() {
    yield takeLatest(UPDATE_SONGS, updateSongs);
    yield takeLatest(PLAY_SONG, playSong);
}