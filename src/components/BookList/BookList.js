import React, { Component } from 'react';
import { BookListItem } from '../BookListItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withBookService } from './../HOC';
import { fetchBooks, bookAddedToCart } from './../../actions';
import { compose } from './../../utils';
import { Spinner } from '../Spinner';
import { ErrorIndicator } from '../ErrorIndicator';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className='book-list'>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => ({
  books,
  loading,
  error,
});

const mapDispatchToProps = (dispatch, { bookService }) => {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookService),
      onAddedToCart: bookAddedToCart,
    },
    dispatch
  );
};

export default compose(
  withBookService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
