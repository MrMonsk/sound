import React, { Component } from 'react';
import Input from '../components/Input';

class EditableToneGenerator extends Component {
    constructor() {
        super();
        this.state = {
            frequency: 440,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({ value: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(`You have written ${this.state.value}`);
    }

    render() {
        console.log(this.state);
        return (
            <Input label='frequency' value={this.state.value} onSubmit={this.handleSubmit} handleChange={this.handleInputChange} />
        )

    }
}

export default EditableToneGenerator;