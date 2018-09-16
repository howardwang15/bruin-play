import { LOGIN, LOGIN_SUCCEEDED, LOGIN_FAILED } from '../actions/auth';
import { put, takeLatest } from 'redux-saga/effects';

function *login(action) {
    if (action.payload) {
        yield put({ type: LOGIN_SUCCEEDED, payload: { loggedIn: true }});
    } else {
        yield put({ type: LOGIN_FAILED });
    }
}

export default function *authSaga() {
    yield takeLatest(LOGIN, login);
}
