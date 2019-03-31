import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { addUserSuccess } from '../actions/users';
import { hideModal } from '../actions/modal';

export const getLocation = state => state.location;

export const getCurrentUsers = state => state.users;

export function* addUser(action) {
  const savedUsers = yield select(getCurrentUsers);
  const githubUsername = action.payload.githubUsername.toLowerCase();
  const userAlreadyExists = savedUsers.find(user => user.login.toLowerCase() === githubUsername);

  if (!userAlreadyExists) {
    try {
      const { data: userData } = yield call(api.get, `/users/${action.payload.githubUsername}`);
      const location = yield select(getLocation);

      const user = {
        id: userData.id,
        login: userData.login,
        name: userData.name,
        avatar: userData.avatar_url,
        location,
      };

      yield put(addUserSuccess(user));
      yield put(hideModal());

      toast.success('User successfully added!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error('User does not exist.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  } else {
    toast.error('User already added.', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
