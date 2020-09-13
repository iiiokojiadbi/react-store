import React from 'react';
import { connect } from 'react-redux';
import './ShoppingCart.css';
import {
  AllBookRemovedFromCart,
  bookAddedToCart,
  bookRemovedFromCart,
} from './../../actions';

const ShoppingCart = ({
  items = [],
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, index) => {
    const { id, title, count, total } = item;

    return (
      <tr key={id}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}</td>
        <td>
          <button
            className='btn btn-outline-danger'
            onClick={() => onDelete(id)}
          >
            <i className='fa fa-trash-o' />
          </button>
          <button
            className='btn btn-outline-success'
            onClick={() => onIncrease(id)}
          >
            <i className='fa fa-plus-circle' />
          </button>
          <button
            className='btn btn-outline-warning'
            onClick={() => onDecrease(id)}
          >
            <i className='fa fa-minus-circle' />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className='shopping-cart-table'>
      <h2>Your Order</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className='total'>Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => ({
  items: cartItems,
  total: orderTotal,
});

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: AllBookRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
