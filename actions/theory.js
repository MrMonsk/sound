import * as actionTypes from '../constants/actionTypes';
import { basicModes } from '../constants/basic';

export function setScaleMode(mode) {
    return {
        type: SET_SCALE_MODE,
        payload: basicModes[mode]
    }
}