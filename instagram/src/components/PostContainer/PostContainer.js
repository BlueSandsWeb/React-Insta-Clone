import React from 'react';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-header-avatar" src="https://tse1.mm.bing.net/th?id=OIP.dE4ObnWQ46TFJp-QbPAkMAHaHa&w=99&h=105&c=8&rs=1&qlt=90&pid=3.1&rm=2" alt=""/>
        <p className="post-header-username">philzcoffee</p>
      </div>
      <div className="post-img-container">
        <img className="post-img" src="https://images.unsplash.com/photo-1444393299901-d5270ace5365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
      </div>
      <div>
        <CommentSection />
      </div>

    </div>
  );
}

export default PostContainer;