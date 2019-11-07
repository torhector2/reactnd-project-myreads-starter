import React from 'react';
import Book from './shelf/Book.js';

function BookGrid(props) {
    const books = props.books || [];
    return(
        <ol className="books-grid">
            { books.map((book) => (<li key={book.id}><Book book={book} /></li>)) }
        </ol>
    );
}

export default BookGrid;

//we need: a function to change its shelf to pass it to the Book 
