import React from 'react';
import './ShopHeader.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className='shop-header row'>
      <Link to='/' className='logo text-dark'>
        React-store
      </Link>
      <Link to='/cart' className='shopping-cart'>
        <i className='cart-icon fa fa-shopping-cart'>
          {numItems} items (${total})
        </i>
      </Link>
    </header>
  );
};

export default ShopHeader;
