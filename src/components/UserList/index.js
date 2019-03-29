import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import UserListItem from '../UserListItem';

const UserList = ({ users }) => (
  <Container>{users && users.map(user => <UserListItem key={user.id} user={user} />)}</Container>
);

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      login: PropTypes.string,
      username: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ).isRequired,
};

export default UserList;
