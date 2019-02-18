import React from "react";

function CommentSection(props) {
  return (
    <div className="comments-container">
      <p><span>hrt</span> <span>com</span></p>
      <p className="likes">373 likes</p>
      <p className="comments-main-text"><span className="comment-username">Philzcoffee</span> We've got more than just delicious coffees to offer at our shops. Don't forget to check out our selection of locally sou <span className="comment-read-more">more</span></p>
      <p className="comment"><span className="comment-username">biancasaurus_</span> T-minus a month until Big/Little/GLil coffee  dates!!! heart @tiffany_monroy @msafransky</p>
      <p className="comment"><span className="comment-username">martinseludo</span> :)</p>
      <p className="comment-timestamp">2 Hours Ago</p>
      <hr className="comment-add-divider" />
      <form action="" className='comments-add-form'>
        <input type="text" className="comments-add-input" placeholder="Add a comment..." />
        <span className="comments-add-menu">...</span>
      </form>
    </div>
  );
}

export default CommentSection;