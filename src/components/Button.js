import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render() {
        return (
            <button 
                className="button"
                onClick={this.props.handleClick}
            >
                {this.props.buttonText}
            </button>
        )
    }
}

export default Button;