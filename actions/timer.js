import * as actionTypes from '../constants/actionTypes';

let timer = null;
export function startTimer() {
    return (dispatch) => {
        clearInterval(timer);
        timer = setInterval(() => setInterval(() => dispatch(timerTick()), 1000));
        dispatch({ type: actionTypes.TIMER_START });
        dispatch(timerTick());
    }
}

export function timerTick() {
    return (dispatch) => {
        dispatch({
            type: action.TIMER_TICK
        });
    }
}

export function stopTimer() {
    return (dispatch) => {
        clearInterval(timer);
        dispatch({
            type: actionTypes.TIMER_STOP
        });
    }
}

export function resetTimer() {
    return (dispatch) => {
        dispatch({
            type: actionTypes.TIMER_RESET
        });
    }
}
