const context = new AudioContext();
const osc = context.createOscillator();

export function createOscillator(waveType, frequency=440) {
    osc.type = waveType;
    osc.frequency.value = frequency;
    osc.start();
}

export function playOscillator() {
    osc.connect(context.destination);
}

export function pauseOscillator() {
    osc.disconnect(context.destination);
}