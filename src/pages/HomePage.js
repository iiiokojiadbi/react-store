import React from 'react';
import { BookList } from '../components/BookList';
import { ShoppingCart } from '../components/ShoppingCart';

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCart />
    </div>
  );
};

export default HomePage;
