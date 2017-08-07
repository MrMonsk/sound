export function getElapsedTime(baseTime, timerStart, timerStop = new Date().getTime()) {
    if (!timerStart) {
        return 0;
    } else {
        return timerStop - timerStart + baseTime;
    }
}