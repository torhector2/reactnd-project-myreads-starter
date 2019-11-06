import React from 'react';
import Book from './shelf/Book.js';

function BookGrid(props) {
    return(
        <ol className="books-grid">
            <li><Book /></li>
            <li><Book /></li>
        </ol>
    );
}

export default BookGrid;