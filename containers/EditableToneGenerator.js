import React, { Component } from 'react';
import Input from '../components/Input';
import Tone from '../components/Tone';
import { waveTypes } from '../constants/basic';
import { randomNumber } from '../utils/utils';

// UI
import { Button, Tooltip, Icon } from 'antd';
import saw from '../assets/saw.svg';
import sine from'../assets/sine.svg';
import square from '../assets/square.svg';
import triangle from '../assets/triangle.svg';

const types = {
    sawtooth: saw,
    sine: sine,
    square: square,
    triangle: triangle
}

class EditableToneGenerator extends Component {
    constructor() {
        super();
        this.state = {
            frequency: 440,
            showPlay: false,
            showInput: false,
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.generateRandomFrequency = this.generateRandomFrequency.bind(this);
        this.startOver = this.startOver.bind(this);
    }

    handleButtonClick(e) {
        console.log(e.target.alt)
        this.setState({ waveType: e.target.alt, showInput: true, showPlay: true })
    }

    generateRandomFrequency() {
        const somePitches = [ 261.6, 277.2, 293.7, 311.1, 329.6, 349.2, 370.0, 392.0, 415.3, 440.0, 466.2, 493.9]
        this.setState({ frequency: somePitches[randomNumber()]});
    }

    startOver() {
        this.setState({ showPlay: false, value: '' })
    }

    handleInputChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ showPlay: true, frequency: this.state.value, value: '' })
    }

    render() {
        const { showPlay, frequency, waveType, showInput } = this.state;
        return (
            <div>
                <h1>Editable Tone Generator</h1>
                <p>select a wavetype:</p>
                {
                    waveTypes.map((type) => {
                        return (
                            <Tooltip key={type + 'tooltip'} title={type}><Button key={type + 'button'} style={{margin: 10}} shape='circle' size='large' key={type + 'button'} onClick={this.handleButtonClick}><img src={types[type]} alt={type}/></Button></Tooltip>
                        )
                    })
                }
                <p>{waveType ? `You've selected: ${waveType}` : '' }</p>
                {showInput ? <Input label='frequency' value={this.state.value} onSubmit={this.handleSubmit} handleChange={this.handleInputChange} /> : '' }
                {showPlay ? <Tone frequency={frequency} waveType={waveType} toggle={this.startOver} /> : 'Enter a frequency, or click random' }
                <p>Current frequency: {frequency}</p>
                <Button onClick={this.generateRandomFrequency}>random!</Button>
            </div>
        )

    }
}

export default EditableToneGenerator;