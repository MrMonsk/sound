const context = new AudioContext();
const osc = context.createOscillator();
osc.start();

export function createOscillator(waveType, frequency=440) {
    osc.type = waveType;
    osc.frequency.value = frequency;
}

export function playOscillator() {
    osc.connect(context.destination);
}

export function pauseOscillator() {
    osc.disconnect(context.destination);
}