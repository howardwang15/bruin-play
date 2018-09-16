import { LOGIN_SUCCEEDED, LOGIN_FAILED } from '../actions/auth';

export default (state = {loggedIn: false}, action) => {
    switch(action.type) {
        case LOGIN_SUCCEEDED:
            return { ...state, ...action.payload };
        case LOGIN_FAILED:
            return state;
        default:
            return state;
    }
}
