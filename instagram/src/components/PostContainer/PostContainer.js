import React from 'react';
import './PostContainer.css';
// import PropTypes from 'prop-types';
import uuidv4 from "uuid/v4";

import CommentSection from '../CommentSection/CommentSection';


class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: props.postData,
      liked: false,
      likes: props.postData.likes,
      commentsArr: props.postData.comments,
      addCommentsInput: ``,
    }
  }

  handleChanges = (e) => {
    e.preventDefault();
    this.setState({ addCommentsInput: e.target.value })
  }

  addComment = (e) => {
    e.preventDefault();
    const newComment = {
      username: 'testUser',
      text: this.state.addCommentsInput,
    }
    this.setState({
      commentsArr: [...this.state.commentsArr, newComment],
      addCommentsInput: ''
    })
  }
  addLike = () => {
    if(this.state.liked === false){
      this.setState({
        likes: this.state.likes + 1,
        liked: true
      })
    }
  }

  render() {
    return (

      <div className="post">
        <div className="post-header">
          <img className="post-header-avatar" src={`${this.state.postData.thumbnailUrl}`} alt="" />
          <p className="post-header-username">{this.state.postData.username}</p>
        </div>
        <div className="post-img-container">
          <img className="post-img" src={`${this.state.postData.imageUrl}`} alt="" />
        </div>
        <div className="comments-container">
          <p><span><i className="far fa-heart" onClick={this.addLike} ></i></span> <span><i className="far fa-compass"></i></span></p>
          <p className="likes">{this.state.likes} likes</p>

          {this.state.commentsArr.map((comment) => {
            return (
              <CommentSection key={uuidv4()} comment={comment} />
            );
          })}

          <p className="comment-timestamp">{this.state.postData.timestamp}</p>
          <hr className="comment-add-divider" />
          <form onSubmit={this.addComment} className='comments-add-form'>
            <input type="text" name="addCommentsInput" value={this.state.addCommentsInput} className="comments-add-input" onChange={this.handleChanges} placeholder="Add a comment..." />
            <span className="comments-add-menu"><i className="fas fa-ellipsis-h"></i></span>
          </form>
        </div>
      </div>

    );
  }
}

export default PostContainer;