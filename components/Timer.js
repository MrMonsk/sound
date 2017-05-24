import React, { Component } from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elapsedTime: 0,
            isTimerRunning: false
        };
        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleStopClick = this.handleStopClick.bind(this);
    }

    getSeconds() {
        return (`0${(this.state.elapsedTime % 60)}`.slice(-2));
    }

    getMinutes() {
        return Math.floor(this.state.elapsedTime / 60);
    }

    handleStartClick() {
        this.setState({ isTimerRunning: true });
        this.incrementer = setInterval(() => {
            this.setState({ elapsedTime: this.state.elapsedTime + 1 });
        }, 1000);
    }

    handleStopClick() {
        clearInterval(this.incrementer);
        this.setState({
            lastClearedIncrementer: this.incrementer,
            isTimerRunning: false
        });
    }

    handleResetClick() {
        this.setState({ elapsedTime: 0 });
    }

    render() {
        const { isTimerRunning, elapsedTime } = this.state;
        return (
            <div className='timer'>
                <div>{this.getMinutes()}:{this.getSeconds()}</div>
                { !this.state.isTimerRunning 
                    ? <button onClick={this.handleStartClick}>start</button>
                    : <button onClick={this.handleStopClick}>stop</button>
                }
                { (isTimerRunning || elapsedTime !== 0)
                    ? <button onClick={this.handleResetClick}>reset</button>
                    : ''
                }
            </div>
        )
    }
}