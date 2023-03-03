import React from 'react';
import {useFetchCommentsQuery} from "../store";

type Comment = {
  id: number,
  message: string
}

const CommentList = () => {
  const { data, error, isFetching } = useFetchCommentsQuery({});
  let content;

  if (isFetching) {
    content = <div>Loading ..........</div>
  } else if (error) {
    content = <div>Bloody error mate!</div>
  } else if (data) {
    content = data.map((comment: Comment) => {
      return <li key={comment.id}>{comment.message}</li>
    });
  } else {
    content = []
  }

  return (
    <div>
      <h3>
        comment list:
      </h3>
      <ul>
        {content}
      </ul>
    </div>
  );
};

export default CommentList;
