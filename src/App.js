import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    let res = await api.post('/test/a')
    console.log('<-  log ->  App -> asynccomponentDidMount -> res', res);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
