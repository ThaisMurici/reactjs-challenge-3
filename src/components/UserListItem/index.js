import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as UserActions from '../../store/actions/users';

import {
  Container, Avatar, UserInfo, Button,
} from './styles';

const UserListItem = ({ user, removeUser }) => (
  <Container>
    <Avatar src={user.avatar} />
    <UserInfo>
      <p className="name">{user.name}</p>
      <p className="login">{user.login}</p>
    </UserInfo>
    <Button onClick={() => removeUser(user.id)} type="danger">
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
  removeUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(UserListItem);
