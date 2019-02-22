import React, {Component} from 'react';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';

import uuidv4 from "uuid/v4";
import dummyData from '../../dummy-data';

class PostsPage extends Component {
  constructor() {
    super()
    this.state = {
      data: dummyData,
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  render() {
    return (
      <div className="post-container">
        <SearchBar />
        <div>

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

export default PostsPage;