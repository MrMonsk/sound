import { combineReducers } from 'redux';
import theory from './theory';
import timer from './timer';

const rootReducer = combineReducers({
    theory,
    timer
});

export default rootReducer;