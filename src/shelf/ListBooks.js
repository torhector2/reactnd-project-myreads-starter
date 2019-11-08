import React, { Component } from "react";
import BookShelf from "./BookShelf.js";
import * as BooksAPI from "../BooksAPI.js";
import { Link } from 'react-router-dom';

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf titleShelf='Currently Reading' books={this.props.shelfs.get("currentlyReading")} refresh={this.props.refresh} />
            <BookShelf titleShelf='Want to Read' books={this.props.shelfs.get("wantToRead")} refresh={this.props.refresh} />
            <BookShelf titleShelf='Read' books={this.props.shelfs.get("read")} refresh={this.props.refresh} />
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