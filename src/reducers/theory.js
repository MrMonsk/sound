import * as actionTypes from '../constants/actionTypes';

export default function (state=null, action) {
    switch (action.type) {
        case actionTypes.SET_SCALE_MODE:
            return {
                ...state,
                scaleMode: action.payload
            };
        default:
            return state;
    }
}