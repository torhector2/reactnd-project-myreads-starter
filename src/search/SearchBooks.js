import React, { Component } from 'react';
import BookGrid from '../BookGrid.js';
import * as BooksAPI from '../BooksAPI.js';

class SearchBooks extends Component {
  state = {
    books: []
  }
  search = async (term) => {
    const query = term.trim();
    if (query.length === 0) {
      this.setState({books: []});
      return;
    }

    let result = await BooksAPI.search(query);
    this.setState({books: result.error ? [] : result})
  }
  render() {  
    return(
        <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.props.back()}>Close</button>
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
              <BookGrid books={this.state.books} />
            </div>
        </div>
    );
  }
}

export default SearchBooks;