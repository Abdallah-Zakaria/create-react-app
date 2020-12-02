import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Header from './component/header';
import Categories from './component/categories';
import Products from './component/products';
import Footer from './component/footer';
import Cart from './component/cart';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Categories />
      <Products />
      <Cart/>
      <Footer />
    </Provider>
  );
}

export default App;
