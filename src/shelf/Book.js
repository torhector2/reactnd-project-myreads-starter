import React, { Component } from 'react';
import * as BooksAPI from "../BooksAPI.js";

class Book extends Component {
    async changeShelf(event) {
        if (!this.props.book) {
            return;
        }
        await BooksAPI.update(this.props.book, event.target.value)
        this.props.refresh();
    }

    render() {
        const { shelf, imageLinks, title, authors = []} = this.props.book;
        const thumbnail =  (imageLinks && imageLinks.thumbnail) || '';
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                        <select id='shelf-select' value={shelf} onChange={(event) => this.changeShelf(event)} >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ title }</div>
                <div className="book-authors">{ authors.join('\n') }</div>
            </div>
        );
    }
}

export default Book;
