import { LOGIN, LOGIN_SUCCEEDED, LOGIN_FAILED } from '../actions/auth';
import { put, takeLatest, call } from 'redux-saga/effects';


async function loginPost(loginObj) {
    let obj;
    if (loginObj.method === 'google') {
        obj = loginObj.Zi;
    } else {
        obj = loginObj;
    }
    const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ user: obj })
    });
}

function *login(action) {
    if (action.payload) {
        yield call(loginPost, action.payload);
        localStorage.setItem('session', action.payload);
        yield put({ type: LOGIN_SUCCEEDED, payload: { loggedIn: true }});
    } else {
        yield put({ type: LOGIN_FAILED });
    }
}

export default function *authSaga() {
    yield takeLatest(LOGIN, login);
}
