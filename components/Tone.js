import React, { Component } from 'react';
import { updateOscillator, playOscillator, pauseOscillator } from '../utils/utils';

class Tone extends Component {
    componentDidMount() {
        updateOscillator(this.props.waveType, this.props.frequency);
    }

    shouldComponentUpdate(nextProps) {
        updateOscillator(nextProps.waveType, nextProps.frequency);
        return true;
    }

    render() {
        return (
            <div>                
                <button onClick={() => { playOscillator() }}>play me</button>
                <button onClick={() => { 
                    pauseOscillator();
                }}>stop</button>
                <button onClick={this.props.toggle}>start over</button>
            </div>
        );
    }
}

export default Tone;
