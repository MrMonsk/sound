import React, { Component } from 'react';
import { updateOscillator, playOscillator, pauseOscillator } from '../utils/utils';
import { Button, Icon } from 'antd';

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
                <Button icon='caret-right' onClick={() => { playOscillator() }} />
                <Button icon='pause' onClick={() => { pauseOscillator() }} />
                <Button onClick={this.props.toggle}>start over</Button>
            </div>
        );
    }
}

export default Tone;
