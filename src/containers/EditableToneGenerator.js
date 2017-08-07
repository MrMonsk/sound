import React, { Component } from 'react';
import Input from '../components/Input';
import Tone from '../components/Tone';
import { waveTypes } from '../constants/basic';
import { randomNumber } from '../utils/utils';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// UI
import { Button, Tooltip, Icon } from 'antd';
import saw from '../../assets/saw.svg';
import sine from'../../assets/sine.svg';
import square from '../../assets/square.svg';
import triangle from '../../assets/triangle.svg';

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
            value: '',
            incrementer: 0,
            somePitches: [ 261.6, 277.2, 293.7, 311.1, 329.6, 349.2, 370.0, 392.0, 415.3, 440.0, 466.2, 493.9, 523.3 ]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.generateRandomFrequency = this.generateRandomFrequency.bind(this);
        this.incrementFrequency = this.incrementFrequency.bind(this);
        this.startOver = this.startOver.bind(this);
    }

    handleButtonClick(e) {
        this.setState({ waveType: e.target.alt, showInput: true, showPlay: true })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.theory && nextProps.theory.scaleMode != this.state.somePitches) {
            const newPitches = [ 261.6, 277.2, 293.7, 311.1, 329.6, 349.2, 370.0, 392.0, 415.3, 440.0, 466.2, 493.9, 523.3 ]
            const newSet = nextProps.theory.scaleMode.map((val) => {
                return newPitches[val]
            })
            this.setState({ somePitches: newSet })
        }
    }

    generateRandomFrequency() {
        this.setState({ frequency: this.state.somePitches[randomNumber(this.state.somePitches.length)] })
    }

    incrementFrequency() {
        console.log(this.state.incrementer)
        this.setState({ frequency: this.state.somePitches[this.state.incrementer], incrementer: (this.state.incrementer + 1) % this.state.somePitches.length })
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
                <Button onClick={this.incrementFrequency}>increment</Button>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        theory: state.theory
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableToneGenerator);