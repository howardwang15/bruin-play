import { put, takeLatest } from 'redux-saga/effects';
import { UPDATE_SONGS, ADD_NEW_SONG, UPDATE } from '../actions/songs';

function *updateSongs(action) {
    console.log(action);
    yield put({ type: UPDATE, payload: action.payload });
}

export default function *songsSaga() {
    yield takeLatest(UPDATE_SONGS, updateSongs);
}