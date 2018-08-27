import { TOGGLE_SPINNER_SUCCEEDED } from '../actions/spinner';

export default (state = { on: false }, action) => {
    switch (action.type) {
        case TOGGLE_SPINNER_SUCCEEDED:
            console.log('spinner on? ', action.payload.on);
            return { ...state, ...action.payload };
        default:
            return state;
    }
}