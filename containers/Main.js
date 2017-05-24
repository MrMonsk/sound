import React, { Component } from 'react';
import Input from '../components/Input';
import Timer from '../components/Timer';
import EditableToneGenerator from './EditableToneGenerator';
import Tone from '../components/Tone';
import Dashboard from './Dashboard';

// styles
import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <EditableToneGenerator />
                <Dashboard />
            </div>
        )
    }
}

export default Main;