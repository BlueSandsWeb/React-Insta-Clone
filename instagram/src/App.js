import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';

import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostsPage/PostsPage';
import authenticate from './components/authentication/authentication';
import LoginPage from './components/LoginPage/LoginPage';

const Authenticated = authenticate(PostsPage)(LoginPage);

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      user: '',
      pass: '',
      usrLoggedIn: false,
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  login = (e) => {
    e.preventDefault();
    console.log("Login")
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Authenticated data={this.state.data} login={this.login}/>
      </div>
    );
  }
}


export default App;
