import React, { Component } from 'react';
import EditableToneGenerator from './EditableToneGenerator';
import Dashboard from './Dashboard';
import VexFlow from '../components/VexFlow';

// styles
import './Main.scss';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <EditableToneGenerator />
                <Dashboard />
                <VexFlow />
            </div>
        )
    }
}

export default Main;