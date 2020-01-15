import { combineReducers } from 'redux';
import screenReducer from './ui.reducer';

export default combineReducers({
    ui: screenReducer
});