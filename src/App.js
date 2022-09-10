import { useState, useEffect } from 'react';
import BookContext from './contexts/BookContext';
import Books from './components/Books/Books';

const initialState = {
  id: '',
  title: '',
  price: '',
  isEditing: false,
};

function App() {
  const [book, setBook] = useState(initialState);
  const [bookList, setBookList] = useState(null);

  useEffect(() => {
    if (bookList === null) {
      const booksLS = localStorage.getItem('booksLS');
      booksLS === null ? setBookList([]) : setBookList(JSON.parse(booksLS));
    } else {
      localStorage.setItem('booksLS', JSON.stringify(bookList));
    }
  }, [bookList]);

  return (
    <BookContext.Provider
      value={{
        initialState,
        book,
        setBook,
        bookList,
        setBookList,
      }}
    >
      <Books />
    </BookContext.Provider>
  );
}

export default App;
