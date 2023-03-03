import React, {ChangeEvent, FormEvent, useState} from 'react';
import './comment-box.scss'
import {useSaveCommentMutation} from "../store";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [saveComment, results] = useSaveCommentMutation({})
  let content;

  if (results.isLoading) {
    content = <button>Loading...</button>
  } else if (results.isError) {
    content = <div>
      <button>Try again</button>
      <div>Error has occurred</div>
    </div>
  } else {
    content = <button>Submit Comment</button>
  }
  const handleOnChange = (event: ChangeEvent) => {
    setComment((event.target as HTMLTextAreaElement)?.value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // call an action creator
    // add save comment
    saveComment({message: comment})
    setComment("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='comment-box-form-field'>
        {/*htmlFor replaces regular for when using React since for is a reserved keyword in javascript: https://reactjs.org/docs/dom-elements.html*/}
        <label htmlFor='comment-box' className='comment-box-label'>Enter a Comment</label>
        <textarea id='comment-box' value={comment} onChange={handleOnChange}></textarea>
      </div>
      <div>
        {content}
      </div>
      <div>{process.env.REACT_APP_BASE_URL}</div>
    </form>
  );
};

export default CommentBox;
