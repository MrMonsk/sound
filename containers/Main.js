import React, { Component } from 'react';
import Input from '../components/Input';
import Timer from '../components/Timer';
import EditableToneGenerator from './EditableToneGenerator';
import Tone from '../components/Tone';
import Dashboard from './Dashboard';
import EditableModeSetter from './EditableModeSetter';

// styles
import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <EditableToneGenerator />
                <EditableModeSetter />
                <Dashboard />
                <Timer updateInterval={1000}/>
            </div>
        )
    }
}

export default Main;