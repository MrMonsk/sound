import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getElapsedTime } from '../utils/helpers';
import { startTimer, stopTimer, resetTimer } from '../actions/timer';

class Timer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { actions } = this.props;
        return (
            <div>
                <div>Time: {}</div>
                <button onClick={() => actions.startTimer()}>Start</button>
                <button onClick={() => actions.stopTimer()}>Stop</button>
                <button onClick={() => actions.resetTimer()}>Reset</button>
            </div>    
        );
    }
}

function mapStateToProps(state) {
    const { timer, theory } = state;
    return {
        timer, theory
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            startTimer, stopTimer, resetTimer
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);