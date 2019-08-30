import DxComment from './DxComment';
import React from 'react';


const DxCommentList = props => {
  return (

    <div>
      {
        props.comments.map(comment => {
          return (
            <DxComment
              comment={comment}
              currentUser={props.currentUser}
              slug={props.slug}
              key={comment.id} />
          );
        })
      }
    </div>
  );
};

export default DxCommentList;
