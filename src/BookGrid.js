import React from 'react';
import Book from './shelf/Book.js';

function BookGrid(props) {
    const books = props.books || [];
    return(
        <ol className="books-grid">
            { books.map((book) => (<li key={book.id}><Book book={book} refresh={props.refresh}/></li>)) }
        </ol>
    );
}

export default BookGrid;
