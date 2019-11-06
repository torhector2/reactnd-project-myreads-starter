import React from 'react';
import BookGrid from '../BookGrid.js';

function BookShelf(props) {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
                <BookGrid />
            </div>
        </div>
    );
}

export default BookShelf;