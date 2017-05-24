import * as actionTypes from '../constants/actionTypes';

const INITIAL_STATE = {
    isTimeUp: false,
    timeRemaining: 0
}

export default function (state=INITIAL_STATE, action) {
    switch(action.type) {
        case actionTypes.SET_TIME_REMAINING:
            return {
                ...state,
                timeRemaining: action.payload
            };
        case actionTypes.SET_TIME_UP:
            return {
                ...state,
                isTimeUp: true
            };
        case actionTypes.SET_TIMER_RESET:
            return INITIAL_STATE;
        default:
            return state;
    }
};