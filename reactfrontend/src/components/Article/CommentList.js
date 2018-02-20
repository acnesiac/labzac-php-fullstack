import Comment from './Comment';
import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const CommentList = props => {
  return (

    <div>
      {
        props.comments.map(comment => {
          return (
            <Comment
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

export default CommentList;
