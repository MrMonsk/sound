import * as actionTypes from '../constants/actionTypes';
import { basicModes } from '../constants/basic';

export function setScaleMode(mode, custom=false) {
    if (!custom) {
        const upScale = basicModes[mode];
        const downScale = basicModes[mode].slice().reverse().slice(1,-1);
        return {
            type: actionTypes.SET_SCALE_MODE,
            payload: upScale.concat(downScale)
        }
    } else {
        return {
            type: actionTypes.SET_SCALE_MODE,
            payload: mode
        }
    }
}