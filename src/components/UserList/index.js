import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as UserActions from '../../store/actions/users';

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

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
