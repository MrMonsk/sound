import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setScaleMode } from '../actions/theory';
import Input from '../components/Input';

class EditableModeSetter extends Component {
    constructor() {
        super();
        this.state = {
            showCustomInput: false
        };
        this.toggleCustomInput = this.toggleCustomInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggleCustomInput() {
        this.setState({ showCustomInput: !this.state.showCustomInput })
    }

    handleInputChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ customSet: this.state.value, value: '' })
        setTimeout(() => {
            const customMode = this.state.customSet.split('');
            this.props.actions.setScaleMode(customMode, true);
        }, 0);
    }

    render() {
        const { showCustomInput, customSet } = this.state;
        return (
            <div>
                <button onClick={this.toggleCustomInput}>set custom set</button>
                { showCustomInput 
                    ? <Input label='custom set' value={this.state.value} onSubmit={this.handleSubmit} handleChange={this.handleInputChange} />
                    : ''
                }
                { customSet && customSet.length 
                    ? <div>{customSet}</div>
                    : ''
                }
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { theory } = state;
    return {
        theory
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            setScaleMode
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableModeSetter);