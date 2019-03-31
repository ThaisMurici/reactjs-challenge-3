import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import 'react-toastify/dist/ReactToastify.css';

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
    <ToastContainer autoClose={5000} />
  </Provider>
);

export default App;
