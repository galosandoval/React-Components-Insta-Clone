import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <div>
      {comments.map(comment => {
      return <Comment key={comment.id} comment = {comment}/>})}
      {/* map through the comments data array and render a Comment for every comment piece of data */}
    </div>
  );
};

export default Comments;
