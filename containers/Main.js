import React, { Component } from 'react';
import Input from '../components/Input';
import Timer from '../components/Timer';
import EditableToneGenerator from './EditableToneGenerator';
import Tone from '../components/Tone';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Input label='answer' />
                <Timer />
                <Tone />
                <EditableToneGenerator />
            </div>
        )
    }
}

export default Main;