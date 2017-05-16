import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercise: { timeRemaining: 5 }
        }
    }

    render() {
        const { exercise } = this.state;
        return (
            <div>
                {(exercise.timeRemaining / 1000 / 60) << 0}:{`00${(exercise.timeRemaining / 1000) % 60}`.substr(-2)}
            </div>    
        );
    }
}

export default Timer;