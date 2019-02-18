import React from 'react';
import './PostContainer.css';

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
        <div className="comments-container">
            <p><span>hrt</span> <span>com</span></p>
            <p className="likes">373 likes</p>
            <p className="comments-main-text"><span className="comment-username">Philzcoffee</span> We've got more than just delicious coffees to offer at our shops. Don't forget to check out our selection of locally sou <span className="comment-read-more">more</span></p>
            <p className="comment"><span className="comment-username">biancasaurus_</span> T-minus a month until Big/Little/GLil coffee  dates!!! heart @tiffany_monroy @msafransky</p>
            <p className="comment"><span className="comment-username">martinseludo</span> :)</p>
            <p className="comment-timestamp">2 Hours Ago</p>
            <hr className="comment-add-divider" />
            <form action="" className='comments-add-form'>
              <input type="text" className="comments-add-input" placeholder="Add a comment..."/>
              <span className="comments-add-menu">...</span>
            </form>

        </div>
      </div>

    </div>
  );
}

export default PostContainer;