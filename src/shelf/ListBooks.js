import React, { Component } from "react";
import BookShelf from "./BookShelf.js";
import * as BooksAPI from "../BooksAPI.js";

class ListBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {shelfs: new Map()}
  }

  componentDidMount() {
    this.requestAllBooks();
  }

  requestAllBooks = async () => {
    let result = await BooksAPI.getAll();
    let shelfMap = result.reduce((mapAccumulator, obj) => {
      let shelf = mapAccumulator.get(obj.shelf) || [];
      mapAccumulator.set(obj.shelf, shelf.concat(obj));

      return mapAccumulator;
    }, new Map());

    this.setState({ shelfs: shelfMap });
    console.log(result);
    console.log(shelfMap);
  };

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf titleShelf='Currently Reading' books={this.state.shelfs.get("currentlyReading")} />
            <BookShelf titleShelf='Want to Read' books={this.state.shelfs.get("wantToRead")} />
            <BookShelf titleShelf='Read' books={this.state.shelfs.get("read")} />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.props.navigateToSearch()}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default ListBooks;