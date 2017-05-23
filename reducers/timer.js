import * as actionTypes from '../constants/actionTypes';

const INITIAL_STATE = { status: 'Stopped', seconds: 0 };

export default function (state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'TIMER_START':
            return {
                ...state,
                status: 'Running'
            };
        case 'TIMER_STOP':
            return {
                ...state,
                status: 'Stopped'
            };
        case 'TIMER_TICK':
            return {
                ...state,
                seconds: state.seconds + 1
            };
        case 'TIMER_RESET':
            return {
                ...state,
                seconds: 0
            };
        default:
            return state;
    }
};