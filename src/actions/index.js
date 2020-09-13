import { BOOKS_ACTIONS, BOOKS_FETCH } from '../constants/booksActionsName';

const booksLoaded = (newBooks) => {
  return {
    type: BOOKS_FETCH.SUCCESS,
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: BOOKS_FETCH.REQUEST,
  };
};

const booksError = (error) => {
  return {
    type: BOOKS_FETCH.FAILURE,
    payload: error,
  };
};

const bookAddedToCart = (bookId) => {
  return {
    type: BOOKS_ACTIONS.ADDED_TO_CART,
    payload: bookId,
  };
};

const bookRemovedFromCart = (bookId) => {
  return {
    type: BOOKS_ACTIONS.REMOVED_FROM_CART,
    payload: bookId,
  };
};

const AllBookRemovedFromCart = (bookId) => {
  return {
    type: BOOKS_ACTIONS.ALL_REMOVED_FROM_CART,
    payload: bookId,
  };
};

const fetchBooksOld = (bookService, dispatch) => () => {
  dispatch(booksRequested());
  bookService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

const fetchBooks = (bookService) => () => (dispatch) => {
  dispatch(booksRequested());
  bookService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export {
  fetchBooks,
  bookAddedToCart,
  AllBookRemovedFromCart,
  bookRemovedFromCart,
};
