import React, { Component } from "react";
import BookShelf from "./BookShelf.js";
import { Link } from 'react-router-dom';

class ListBooks extends Component {
  render() {
    const shelves = [
      ['Currently Reading', 'currentlyReading'],
      ['Want to Read', 'wantToRead'],
      ['Read', 'read']
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => (
              <BookShelf key={shelf[1]} titleShelf={shelf[0]}  books={this.props.shelfs.get(shelf[1])} refresh={this.props.refresh} />)
            )}
          </div>
        </div>
        <div className="open-search">
          <Link to='/search' >Add a Book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;