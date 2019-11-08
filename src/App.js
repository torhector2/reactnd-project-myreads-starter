import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './shelf/ListBooks.js';
import SearchBooks from './search/SearchBooks.js';
import { BrowserRouter, Route } from 'react-router-dom';

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={ListBooks} />
        <Route path='/search' component={SearchBooks} />
      </BrowserRouter>
    )
  }
}

export default BooksApp;
