import React from 'react';
import { Provider } from 'react-redux';
import Route from './router';
import './config/ReactotronConfig';

import store from './store';

// import { Container } from './styles';

const App = () => (
  <Provider store={store}>
    <Route />
  </Provider>
);

export default App;
