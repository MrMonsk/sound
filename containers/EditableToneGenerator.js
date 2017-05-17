import React, { Component } from 'react';
import Input from '../components/Input';
import Tone from '../components/Tone';

class EditableToneGenerator extends Component {
    constructor() {
        super();
        this.state = {
            frequency: 440,
            showPlay: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.startOver = this.startOver.bind(this);
    }

    startOver() {
        this.setState({ showPlay: false, value: '' })
    }

    handleInputChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const values = this.state.value.split(', ');
        this.setState({ showPlay: true, frequency: values[0], waveType: values[1] })
        setTimeout(() => {
            alert(`You have written ${this.state.value}. This means that freq: ${this.state.frequency}, wave: ${this.state.waveType}`);
        }, 0);
        
    }

    render() {
        const { showPlay, frequency, waveType } = this.state;
        return (
            <div>
                <Input label='frequency' value={this.state.value} onSubmit={this.handleSubmit} handleChange={this.handleInputChange} />
                {showPlay ? <Tone frequency={frequency} waveType={waveType} toggle={this.startOver} /> : 'Enter a frequency, waveType above' }
            </div>
        )

    }
}

export default EditableToneGenerator;