import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import {
  Container, Avatar, UserInfo, Button,
} from './styles';

const UserListItem = ({ user }) => (
  <Container>
    <Avatar src={user.avatar} />
    <UserInfo>
      <p className="name">{user.name}</p>
      <p className="login">{user.login}</p>
    </UserInfo>
    <Button onClick={() => {}} type="danger">
      <FontAwesomeIcon className="icon" icon={faTimesCircle} />
    </Button>
    <Button onClick={() => {}} type="normal">
      <FontAwesomeIcon className="icon" icon={faChevronRight} />
    </Button>
  </Container>
);

UserListItem.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string,
    username: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default UserListItem;
