import React, { Component } from 'react';
import { updateOscillator, playOscillator, pauseOscillator } from '../utils/utils';
import { Button, Icon } from 'antd';

const ButtonGroup = Button.Group;

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
            <div style={{margin: 5}}>   
                <ButtonGroup>
                    <Button icon='caret-right' onClick={() => { playOscillator() }} />
                    <Button icon='pause' onClick={() => { pauseOscillator() }} />
                    <Button icon='rollback' onClick={this.props.toggle} />
                </ButtonGroup>             
            </div>
        );
    }
}

export default Tone;
