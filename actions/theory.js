import * as actionTypes from '../constants/actionTypes';
import { basicModes } from '../constants/basic';

export function setScaleMode(mode) {
    return {
        type: actionTypes.SET_SCALE_MODE,
        payload: basicModes[mode]
    }
}