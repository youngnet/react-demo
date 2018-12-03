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
          哈哈哈Hello
        </header>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542189491535&di=635341e39cb65dcd0fc82fedaf162705&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fc995d143ad4bd1133386207051afa40f4bfb052c.jpg" alt=""/>
      </div>
    );
  }
}

export default App;
