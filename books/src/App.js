import React, { useContext, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

export default function App() {

  const { getBooks } = useContext(BooksContext);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className='app'>
        <h1>Reading List</h1>
        <BookList/>
        <BookCreate/>
    </div>
  );
}
