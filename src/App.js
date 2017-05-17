import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Main from '../containers/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Sound
        </p>
        <Main />
      </div>
    )
  }
}

export default App
