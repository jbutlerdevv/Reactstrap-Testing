import React, { Component } from 'react';
import './App.css';
import TopNav from './components/Nav/TopNav';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Home />
      </div>
    );
  }
}

export default App;
