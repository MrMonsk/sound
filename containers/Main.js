import React, { Component } from 'react';
import Input from '../components/Input';
import Timer from '../components/Timer';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Input label='answer' />
                <Timer />
            </div>
        )
    }
}

export default Main;