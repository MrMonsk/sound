import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setScaleMode } from '../actions/theory';
import EditableModeSetter from './EditableModeSetter';

import { basicModes } from '../constants/basic';

// UI components
import { Select } from 'antd';
const Option = Select.Option;

class Dashboard extends Component {
    constructor() {
        super();

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(value) {
        this.props.actions.setScaleMode(value);
    }

    render() {
        const { theory } = this.props;
        return (
            <div>
                <h3>Mode Selector</h3>
                <Select
                    showSearch
                    placeholder="Select a scale mode"
                    optionFilterProp="children"
                    onChange={this.handleInputChange}
                    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    style={{width: 200}}
                >
                    { Object.keys(basicModes).map((mode) => {
                        return (
                            <Option key={mode + 'option'} value={mode}>{mode}</Option>
                        )
                    })}
                </Select>
                <EditableModeSetter />
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
        actions: bindActionCreators({
            setScaleMode
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);