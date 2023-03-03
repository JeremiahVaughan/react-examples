import {createContext, useCallback, useState} from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {
  const [books, setBooks] = useState([])

  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  }, []);
  const handleCreateBook = async title => {
    // BAD CODE!
    // books.push({ id: 123, title}) // The problem is that the reference for the array will be the same, so React won't rerender in favor of optimization.
    // setBooks(books)

    // GOOD CODE!
    const response = await axios.post('http://localhost:3001/books', {title});
    setBooks([...books, response.data]) // We solve the problem by creating a new array and putting the old elements and new element into it.
  }
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    })
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return response.data
      }
      return book;
    })
    setBooks(updatedBooks)
  }
  const deleteBookById = async id => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  }

  return <BooksContext.Provider value={{
    books,
    handleCreateBook,
    editBookById,
    deleteBookById,
    fetchBooks
  }}>
    {children}
  </BooksContext.Provider>
}

export {Provider};
export default BooksContext;
