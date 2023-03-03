import './BookList.css'
import BookShow from "../book-show/BookShow";
import {useFetchBooksQuery} from "../../store";
import Skeleton from "../skeleton";

function BookList() {
  const { data, error, isLoading } = useFetchBooksQuery();

    let content;
    if (isLoading) {
        content = <Skeleton times={3}></Skeleton>
    } else if (error) {
        content = <div>Error loading books.</div>
    } else {
        content = data.map(book => <BookShow key={book.id} book={book}/>);
    }
  return (
    <div>
      <h1>Reading List</h1>
        {content}
    </div>
  )
}

export default BookList;
