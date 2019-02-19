import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import uuidv4 from "uuid/v4";

import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
  return (
    <div className="post-container">
      {props.data.map((data) => {
        return (
          <div className="post" key={uuidv4()}>
              <div className="post-header">
              <img className="post-header-avatar" src={`${data.thumbnailUrl}`} alt=""/>
                <p className="post-header-username">{data.username}</p>
              </div>
              <div className="post-img-container">
              <img className="post-img" src={`${data.imageUrl}`} alt=""/>
              </div>
              <div>
                <CommentSection data={data}/>
              </div>
            </div>
        );
      })}
    </div>
  );
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  )
}

export default PostContainer;