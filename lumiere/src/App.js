import './App.sass';
import React, { Component } from 'react';
import Home from './pages/Home/Home';
import Article from './pages/Article/Article';

class App extends Component {

  state = {
    theme: 'light'
  }
  render() {
    return (
      <div className="App">
        <Article />
      </div>
    );
  }
}

export default App;
