import { TOGGLE_SPINNER, TOGGLE_SPINNER_SUCCEEDED } from '../actions/spinner';
import { put, select, takeLatest } from 'redux-saga/effects';
import { spinner } from '../selectors';

export function *toggleSpiner() {
    const spinnerState = yield select(spinner);
    console.log(spinnerState);
    yield put({ type: TOGGLE_SPINNER_SUCCEEDED, payload: { on: !spinnerState }});
}

export default function *spinnerSaga() {
    yield takeLatest(TOGGLE_SPINNER, toggleSpiner);
}