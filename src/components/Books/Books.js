import React from 'react';
import BooksForm from './BooksForm';
import BooksList from './BooksList';

function Books() {
  return (
    <main className="main">
      <BooksForm />
      <BooksList />
    </main>
  );
}

export default Books;
