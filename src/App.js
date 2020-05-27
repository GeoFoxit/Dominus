import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  state = { logged: false }
  
  sign_in = () => {
    this.setState(
      {logged: true}
    )
  }

  sign_out = () => {
    this.setState(
      {logged: false}
    )
  }

  sign_up = () => {

  }

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div id="app">
          <Header logged={this.state.logged}/>
          <Content logged={this.state.logged} sign={{sign_in: this.sign_in, sign_out: this.sign_out, sign_up: this.sign_up}}/>
          <Footer logged={this.state.logged}/>
        </div>
      </Router>
    );
  }
}

export default App;
