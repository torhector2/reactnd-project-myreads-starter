import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './shelf/ListBooks.js';
import SearchBooks from './search/SearchBooks.js';
import { BrowserRouter, Route } from 'react-router-dom';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {shelfs: new Map()}
  }

  componentDidMount() {
    this.requestAllBooks();
  }

  requestAllBooks = async () => {
    const result = await BooksAPI.getAll();
    const shelfMap = result.reduce((mapAccumulator, obj) => {
      let shelf = mapAccumulator.get(obj.shelf) || [];
      mapAccumulator.set(obj.shelf, shelf.concat(obj));

      return mapAccumulator;
    }, new Map());

    const shelfByBookId = result.reduce((mapAccumulator, book) => {
      if (book.id.length > 0) {
        mapAccumulator.set(book.id, book.shelf)
      }

      return mapAccumulator;
    }, new Map());

    this.setState({ shelfs: shelfMap,  shelfByBookId: shelfByBookId});
  };

  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' render={() => (<ListBooks shelfs={this.state.shelfs} refresh={() => this.requestAllBooks()}/>)} />
        <Route path='/search' render={() => (<SearchBooks shelfByBookId={this.state.shelfByBookId} refresh={() => this.requestAllBooks()} />)} />
      </BrowserRouter>
    )
  }
}

export default BooksApp;
