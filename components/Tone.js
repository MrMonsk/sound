import React, { Component } from 'react';
import { createOscillator, playOscillator, pauseOscillator } from '../utils/utils';

class Tone extends Component {
    componentDidMount() {
        createOscillator('triangle', 442);
    }

    render() {
        return (
            <div>                
                <button onClick={() => { playOscillator() }}>play me</button>
                <button onClick={() => { 
                    pauseOscillator();
                }}>stop</button>
            </div>
        );
    }
}

export default Tone;
