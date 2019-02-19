import React from "react";
import uuidv4 from "uuid/v4";
import PropTypes from 'prop-types';

function CommentSection(props) {
  return (
    <div className="comments-container">
      <p><span><i className="far fa-heart"></i></span> <span><i className="far fa-compass"></i></span></p>
      <p className="likes">{props.data.likes} likes</p>
      {props.data.comments.map((comment) => {
        return (
          <p key={uuidv4()} className="comment"><span className="comment-username">{comment.username}</span> {comment.text}</p>
        );
      })}
      <p className="comment-timestamp">{props.data.timestamp}</p>
      <hr className="comment-add-divider" />
      <form action="" className='comments-add-form'>
        <input type="text" className="comments-add-input" placeholder="Add a comment..." />
        <span className="comments-add-menu"><i className="fas fa-ellipsis-h"></i></span>
      </form>
    </div>
  );
}

CommentSection.propTypes = {
  data: PropTypes.shape({
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
      })
    )
  })
}

export default CommentSection;