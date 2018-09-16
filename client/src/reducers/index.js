import { combineReducers } from 'redux';
import songs from './songs';
import spinner from './spinner';
import auth from './auth';

export default combineReducers({ songs, spinner, auth });