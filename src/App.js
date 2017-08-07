import React, { Component } from 'react'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US';
import logo from './logo.svg'
import './App.css'
import Main from './containers/Main'

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <div className="App">
          <div className="App-intro">
            <h1>Sound Things</h1>
            <p>by Yowon Yoon</p>
          </div>
          <Main />
        </div>
      </LocaleProvider>
    )
  }
}

export default App
