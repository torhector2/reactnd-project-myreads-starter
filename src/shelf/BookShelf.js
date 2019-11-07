import React from 'react';
import BookGrid from '../BookGrid.js';

function BookShelf(props) {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.titleShelf}</h2>
            <div className="bookshelf-books">
                <BookGrid books={props.books}/>
            </div>
        </div>
    );
}

export default BookShelf;

//we need: a shelf title and a list of books, and a function to change its shelf 