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
        <Route exact path='/' render={({ history }) => (
          <ListBooks searchFor={ () => history.push('/search') } />
        ) } />
        <Route path='/search' render={({ history }) => (
          <SearchBooks back={ () => history.push('/') } />
        ) } />
      </BrowserRouter>
    )
  }
}

export default BooksApp;
