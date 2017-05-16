import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            value: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({ input: e.target.value, value: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(`You have written ${this.state.input}`);
        this.setState({ value: '' })
    }

    render() {
        const { label } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {label}:
                    <input type="text" value={this.state.value} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Enter" />
            </form>
        )
    }
}

export default Input;