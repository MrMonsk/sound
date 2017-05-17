import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            value: ''
        }
    }

    render() {
        const { label, onSubmit, handleChange, value } = this.props;
        return (
            <form onSubmit={onSubmit}>
                <label>
                    {label}:
                    <input type="text" value={value} onChange={handleChange} />
                </label>
                <input type="submit" value="Enter" />
            </form>
        )
    }
}

export default Input;