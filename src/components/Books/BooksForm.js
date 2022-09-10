import React, { useContext } from 'react';
import BookContext from '../../contexts/BookContext';
import { v4 as uuidv4 } from 'uuid';

function BooksForm() {
  const { initialState, book, setBook, setBookList } = useContext(BookContext);

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (book.title && book.price && !book.isEditing) {
      const newBook = { id: uuidv4(), title: book.title, price: book.price };
      setBookList((prevState) => [...prevState, newBook]);
      setBook(initialState);
    } else if (book.title && book.price && book.isEditing) {
      setBookList((prevState) =>
        prevState.map((prevBook) =>
          prevBook.id === book.id
            ? { ...prevBook, title: book.title, price: book.price }
            : prevBook
        )
      );
      setBook(initialState);
    } else {
      alert('Please Fill In The Blanks');
    }
  };

  const handleChange = (e) => {
    setBook((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <div className="library">
      <h2>Library</h2>
      <form className="library-form" onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" value={book.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="text" name="price" value={book.price} onChange={handleChange} />
        </div>
        <button type="submit">{book.isEditing ? 'Edit' : 'Register'}</button>
      </form>
    </div>
  );
}

export default BooksForm;
