import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({ input: e.target.value })
    }

    handleSubmit(e) {
        alert(`You have written ${this.state.input}`);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Write something:
                    <input type="text" value={this.state.value} onChange={this.handleInputChange} />
                </label>
                <input type="submit" value="Enter" />
            </form>
        )
    }
}

export default Input;