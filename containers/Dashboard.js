import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setScaleMode } from '../actions/theory';

class Dashboard extends Component {
    componentDidMount() {
        this.props.actions.setScaleMode('major');
    }

    render() {
        const { thoery } = this.props;
        return (
            <div>dashboard</div>
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