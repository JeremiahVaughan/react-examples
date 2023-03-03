import './BookShow.css'
import {useState} from "react";
import BookEdit from "../book-edit/BookEdit";
import {useDeleteBookMutation} from "../../store";

function BookShow({book}) {
  const [showEdit, setShowEdit] = useState(false)
  const [deleteBook, results] = useDeleteBookMutation();


    const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const handleEditSubmit = () => {
    setShowEdit(false)
  }

  let content = <h3>{book.title}, Id: {book.id}</h3>
  if (showEdit) {
    content = <BookEdit book={book} handleEditSubmit={handleEditSubmit} />
  }

  return (
    <div>
      <div>{content}</div>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={() => deleteBook(book)}>Delete</button>
      <div className="spacer"></div>
    </div>
  );
}

export default BookShow;
