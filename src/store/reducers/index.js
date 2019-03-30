import { combineReducers } from 'redux';

import users from './users';
import modal from './modal';
import location from './location';

export default combineReducers({
  users,
  modal,
  location,
});
