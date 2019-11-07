import React from 'react';
import BookShelf from './BookShelf.js';

function ListBooks(props) {
    return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf />
                <BookShelf />
                <BookShelf />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => props.searchFor() }>Add a book</button>
            </div>
        </div>
    );
}

export default ListBooks;