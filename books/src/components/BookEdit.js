import React, { useContext, useState } from 'react';
import BooksContext from '../context/books';

export default function BookEdit({ book, onSubmit }) {

    const { editBookById } = useContext(BooksContext);

    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        editBookById(book.id, title);
        onSubmit();
    };
  return (
    <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange}/>
        <button className='button is-primary'>
            Save
        </button>
    </form>
  )
}
