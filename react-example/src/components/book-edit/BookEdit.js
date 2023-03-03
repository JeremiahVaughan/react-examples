import './BookEdit.css'
import { useState } from "react";
import { useUpdateBookMutation } from "../../store";

function BookEdit({book, handleEditSubmit}) {
  const [title, setTitle] = useState(book.title);
  const [updateBook, results] = useUpdateBookMutation();
  const handleChange = event => {
    setTitle(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    updateBook({id: book.id, title})
    handleEditSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} />
      <button>Save</button>
    </form>
  )
}

export default BookEdit;
