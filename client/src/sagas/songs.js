import { put, takeLatest, select, call } from 'redux-saga/effects';
import { UPDATE_SONGS, UPDATE_SUCCEEDED, PLAY_SONG, PLAY_SONG_SUCCEEDED, DOWNLOAD_SONG   } from '../actions/songs';
import { playingSong } from '../selectors';
import downloadFile from 'downloadjs';

function download(song) {
    return fetch(`http://localhost:3000/songs/download?song=${JSON.stringify(song)}`, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}

function *updateSongs(action) {
    yield put({ type: UPDATE_SUCCEEDED, payload: { data: action.payload.songs }});
}

function *playSong(action) {
    const currentSong = yield select(playingSong);
    const name = action.payload.name.replace(/\s+/g, '') + '.mp3';
    const url = `https://storage.googleapis.com/howardwang15/BruinPlay/${name}`;
    if (currentSong && action.payload.name === currentSong.name) {
        yield put({type: PLAY_SONG_SUCCEEDED, payload: { currentPlaying: null, url: null }});
    } 
    else {
        const temp = document.querySelector('audio');
        if (temp) {
            temp.pause();
        }
        yield put({ type: PLAY_SONG_SUCCEEDED, payload: { currentPlaying: action.payload, url }});
    }
}

function *downloadSong(action) {
    const res = yield call(download, action.payload);
    res.blob().then(blob => downloadFile(blob, action.payload.name + '.mp3'));
}

export default function *songsSaga() {
    yield takeLatest(UPDATE_SONGS, updateSongs);
    yield takeLatest(PLAY_SONG, playSong);
    yield takeLatest(DOWNLOAD_SONG, downloadSong);
}