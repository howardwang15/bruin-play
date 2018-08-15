import { put, takeLatest } from 'redux-saga/effects';
import { UPDATE_SONGS, ADD_NEW_SONG, UPDATE_SUCCEEDED, PLAY_SONG, PLAY_SONG_SUCCEEDED } from '../actions/songs';

function *updateSongs(action) {
    yield put({ type: UPDATE_SUCCEEDED, payload: action.payload });
}

function *playSong(action) {
    const song = action.payload;
    console.log(song);
}

export default function *songsSaga() {
    yield takeLatest(UPDATE_SONGS, updateSongs);
    yield takeLatest(PLAY_SONG, playSong);
}