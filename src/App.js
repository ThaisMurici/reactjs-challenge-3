import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import UserList from './components/UserList';
import Map from './components/Map';
import store from './store';

class App extends Component {
  state = {
    users: [
      {
        is: 1,
        login: 'ThaisMurici',
        name: 'Thais Moraes',
        avatar: 'https://avatars3.githubusercontent.com/u/16256916?v=4',
      },
      {
        id: 2,
        login: 'ThaisMurici',
        name: 'Thais Moraes',
        avatar: 'https://avatars3.githubusercontent.com/u/16256916?v=4',
      },
      {
        id: 3,
        login: 'ThaisMurici',
        name: 'Thais Moraes',
        avatar: 'https://avatars3.githubusercontent.com/u/16256916?v=4',
      },
    ],
  };

  render() {
    const { users } = this.state;
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Map />
        <UserList users={users} />
      </Provider>
    );
  }
}

export default App;
