import React, { useContext } from 'react';
import BookContext from '../../contexts/BookContext';

function BooksList() {
  const { initialState, setBook, bookList, setBookList } = useContext(BookContext);

  const editBookHandler = (id, title, price) => {
    setBook((prevState) => ({
      ...prevState,
      id: id,
      title: title,
      price: price,
      isEditing: true,
    }));
  };

  const deleteBookHandler = (id) => {
    setBookList((prevState) => prevState.filter((book) => book.id !== id));
    setBook(initialState);
  };

  return (
    <div className="books">
      <h2>Books List:</h2>
      <div className="library-list">
        {bookList?.map(({ id, title, price }) => (
          <article className="list__item" key={id}>
            <div className="list__item--content">
              <p>{title}</p>
              <p>{price}</p>
            </div>
            <div className="list__item--actions">
              <button type="button" onClick={() => editBookHandler(id, title, price)}>
                Edit
              </button>
              <button type="button" onClick={() => deleteBookHandler(id)}>
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
