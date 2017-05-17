import React, { Component } from 'react';
import Input from '../components/Input';
import Tone from '../components/Tone';
import Button from '../components/Button';
import { waveTypes } from '../constants/basic';

class EditableToneGenerator extends Component {
    constructor() {
        super();
        this.state = {
            frequency: 440,
            showPlay: false,
            showInput: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.startOver = this.startOver.bind(this);
    }

    handleButtonClick(e) {
        this.setState({ waveType: e.target.innerText, showInput: true })
    }

    startOver() {
        this.setState({ showPlay: false, value: '' })
    }

    handleInputChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ showPlay: true, frequency: this.state.value })
    }

    render() {
        const { showPlay, frequency, waveType, showInput } = this.state;
        return (
            <div>
                <p>select a wavetype:</p>
                {
                    waveTypes.map((type) => {
                        return (
                            <Button key={type + 'button'} buttonText={type} handleClick={this.handleButtonClick} />
                        )
                    })
                }
                <p>{waveType ? `You've selected: ${waveType}` : '' }</p>
                {showInput ? <Input label='frequency' value={this.state.value} onSubmit={this.handleSubmit} handleChange={this.handleInputChange} /> : '' }
                {showPlay ? <Tone frequency={frequency} waveType={waveType} toggle={this.startOver} /> : 'Enter a frequency, or click random' }
            </div>
        )

    }
}

export default EditableToneGenerator;