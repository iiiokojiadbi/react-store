import { BOOKS_ACTIONS } from './../constants/booksActionsName';

const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  }

  if (index === -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems, orderTotal },
  } = state;

  const book = books.find((book) => book.id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[itemIndex];

  const newItem = updateCartItem(book, item, quantity);
  return {
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
    orderTotal: orderTotal + quantity * book.price,
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case BOOKS_ACTIONS.ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);
    case BOOKS_ACTIONS.REMOVED_FROM_CART:
      return updateOrder(state, action.payload, -1);
    case BOOKS_ACTIONS.ALL_REMOVED_FROM_CART:
      const item = state.shoppingCart.cartItems.find(
        (book) => book.id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);
    default:
      return state.shoppingCart;
  }
};

export { updateShoppingCart };
