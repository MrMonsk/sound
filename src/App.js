import React, { Component } from 'react'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US';
import logo from './logo.svg'
import './App.css'
import Main from '../containers/Main'

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <div className="App">
          <p className="App-intro">
            Sound
          </p>
          <Main />
        </div>
      </LocaleProvider>
    )
  }
}

export default App
