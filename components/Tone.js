import React, { Component } from 'react';
import { createOscillator, playOscillator, pauseOscillator } from '../utils/utils';

class Tone extends Component {
    componentDidMount() {
        console.log(this.props)
        createOscillator(this.props.waveType, this.props.frequency);
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
