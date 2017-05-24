const context = new AudioContext();
const osc = context.createOscillator();
const gain = context.createGain();
osc.connect(gain);
osc.start();

export function updateOscillator(waveType='sine', frequency=440) {
    osc.type = waveType;
    osc.frequency.value = frequency;
}

export function playOscillator() {
    gain.gain.exponentialRampToValueAtTime( 1, context.currentTime + 0.04 );
    setTimeout(() => {
        gain.connect(context.destination);
    }, 0)
}

export function pauseOscillator() {
    gain.gain.exponentialRampToValueAtTime( 0.00001, context.currentTime + 0.04 );
    setTimeout(() => {
        gain.disconnect(context.destination);
    }, 300);
}

export function randomNumber(num) {
    return Math.floor(Math.random() * num);
}