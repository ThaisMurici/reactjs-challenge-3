import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { addUserSuccess } from '../actions/users';
import { hideModal } from '../actions/modal';

export const getLocation = state => state.location;

export function* addUser(action) {
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
}
