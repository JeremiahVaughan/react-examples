import './BookCreate.css'
import {useState} from "react";
import {useAddBookMutation} from "../../store";

function BookCreate() {
  const [title, setTitle] = useState('');

  const [addBook, results] = useAddBookMutation();

  const handleChange = event => {
    setTitle(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    addBook({title})
    setTitle('')
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange}/>
      <button>Create</button>
    </form>
  </div>
  )
}

export default BookCreate;
