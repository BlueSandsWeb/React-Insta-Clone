import React from "react";
// import PropTypes from 'prop-types';

function CommentSection(props) {
  return (
    <>
      <p className="comment"><span className="comment-username">{props.comment.username}</span> {props.comment.text}</p>
    </>
  );
}


export default CommentSection;