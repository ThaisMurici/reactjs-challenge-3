import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import UserList from './components/UserList';
import Map from './components/Map';
import Modal from './components/Modal';

import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Map />
    <UserList />
    <Modal />
  </Provider>
);

export default App;
