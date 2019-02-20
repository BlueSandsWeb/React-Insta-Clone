import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import uuidv4 from "uuid/v4";

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="post-container">
          {this.state.data.map((data) => {
            return (
              <PostContainer key={uuidv4()} postData={data} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
