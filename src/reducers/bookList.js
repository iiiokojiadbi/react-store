import { BOOKS_FETCH } from '../constants/booksActionsName';

const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case BOOKS_FETCH.REQUEST:
      return {
        books: [],
        loading: true,
        error: null,
      };
    case BOOKS_FETCH.SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    case BOOKS_FETCH.FAILURE:
      return {
        books: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state.bookList;
  }
};

export { updateBookList };
