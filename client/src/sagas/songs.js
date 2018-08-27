import { put, takeLatest, select, call } from 'redux-saga/effects';
import { UPDATE_SONGS, UPDATE_SUCCEEDED, PLAY_SONG, PLAY_SONG_SUCCEEDED, DOWNLOAD_SONG, SORT_SONGS, SORT_SONGS_SUCCEEDED } from '../actions/songs';
import * as selectors from '../selectors';
import download from 'downloadjs';
import { toggleSpiner } from './spinner';

function getSong(song) {
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
    const currentSong = yield select(selectors.playingSong);
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

function *downloadBlob(res, name) {
    const blob = yield res.blob();
    download(blob, name + '.mp3');
}

function *downloadSong(action) {
    yield call(toggleSpiner);
    const res = yield call(getSong, action.payload);
    yield call(downloadBlob, res, action.payload.name);
    yield call(toggleSpiner);
}

function *sortSongs(action) {
    const data = yield select(selectors.data);
    switch (action.payload) {
        case 'name':
            data.sort((a, b) => {
                if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                    return -1;
                } else if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                    return 1;
                } else {
                    return 0;
                }
            });
            break;
        case 'artist':
            data.sort((a, b) => {
                if (a.artist.toLocaleLowerCase() < b.artist.toLocaleLowerCase()) {
                    return -1;
                } else if (a.artist.toLocaleLowerCase() > b.artist.toLocaleLowerCase()) {
                    return 1;
                } else {
                    return 0;
                }
            });
            break;
        default:
            break;
    }   
    yield put({ type: SORT_SONGS_SUCCEEDED, payload: {data} })
}

export default function *songsSaga() {
    yield takeLatest(UPDATE_SONGS, updateSongs);
    yield takeLatest(PLAY_SONG, playSong);
    yield takeLatest(DOWNLOAD_SONG, downloadSong);
    yield takeLatest(SORT_SONGS, sortSongs);
}