import * as actionTypes from '../constants/actionTypes';
import { basicModes } from '../constants/basic';

export function setScaleMode(mode, custom=false) {
    if (!custom) {
        return {
            type: actionTypes.SET_SCALE_MODE,
            payload: basicModes[mode]
        }
    } else {
        return {
            type: actionTypes.SET_SCALE_MODE,
            payload: mode
        }
    }
}