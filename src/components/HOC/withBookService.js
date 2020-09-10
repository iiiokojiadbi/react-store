import React from 'react';
import { BookServiceConsumer } from './../../context';

const withBookService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookServiceConsumer>
        {(bookService) => {
          return <Wrapped {...props} bookService={bookService} />;
        }}
      </BookServiceConsumer>
    );
  };
};

export default withBookService;
