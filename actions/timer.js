import * as actionTypes from '../constants/actionTypes';

export function startTimer(time = 10000) {
    return {
        type: actionTypes.SET_TIME_REMAINING,
        payload: time
    };
}

export function stopTimer() {
    return {
        type: actionTypes.TIMER_STOP,
        now: new Date().getTime()
    };
}

export function resetTimer() {
    return {
        type: actionTypes.SET_TIME_RESET
    };
}
