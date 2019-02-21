import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import uuidv4 from "uuid/v4";

function PostsPage(props) {
  return(
    <div className="post-container">
      {props.data.map((data) => {
        return (
          <PostContainer key={uuidv4()} postData={data} />
        );
      })}
    </div>
  );
}

export default PostsPage;