import React, { Component } from 'react';
import './App.css';

import PostsPage from './components/PostsPage/PostsPage';
import authentication from './components/authentication/authentication';
import LoginPage from './components/LoginPage/LoginPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      test: "testing"
    }
  }

  render() {
    return (
      <div className="App">
        <ComponentFromAuthenticate test={this.state.test}/>
      </div>
    );
  }
}

const ComponentFromAuthenticate = authentication(PostsPage)(LoginPage);

export default App;
