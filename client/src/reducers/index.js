import { combineReducers } from 'redux';
import songs from './songs';
import spinner from './spinner';

export default combineReducers({ songs, spinner });