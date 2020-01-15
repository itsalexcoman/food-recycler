import { combineReducers } from 'redux';
import UIReducer from './ui.reducer';
import UserReducer from './user.reducer'

export default combineReducers({
    ui: UIReducer,
    user: UserReducer
});