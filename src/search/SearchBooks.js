import React, { Component } from 'react';
import BookGrid from '../BookGrid.js';
import * as BooksAPI from '../BooksAPI.js';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
  state = {
    books: [],
    query: ''
  }

  search = async (term) => {
    const query = term.trim();
    if (query.length === 0) {
      this.setState({books: [], query: ''});
      return;
    }

    let result = await BooksAPI.search(query);
    console.log(term)
    if (result.error) {
      this.setState({books: [], query: term.trim()})
    } else {
      this.setState({books: result.map((book) => this.updateShelf(book)), query: term.trim()})
    }
  }

  updateShelf = (book) => {
    const shelf = this.props.shelfByBookId.get(book.id) || 'none';
    return {...book, shelf: shelf}
  }

  render() {  
    const {query, books} = this.state;
    const isANoResultsQuery = query.trim().length > 0 && books.length === 0;
    return(
        <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={(e) => this.search(e.target.value)} />

              </div>
            </div>
            <div className="search-books-results">
              { isANoResultsQuery && ( <p>No results found for that query</p>) }
              <BookGrid books={this.state.books} refresh={this.props.refresh}/>
            </div>
        </div>
    );
  }
}

export default SearchBooks;