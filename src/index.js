import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App';
import { ErrorBoundry } from './components/ErrorBoundry';
import { BookServiceProvider } from './context';
import BookService from './services/BookService';

import store from './store';

const booksService = new BookService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookServiceProvider value={booksService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
