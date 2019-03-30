import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import {
  Background, ModalContainer, Form, Div, Button,
} from './styles';

import * as UserActions from '../../store/actions/users';

class Modal extends Component {
  static propTypes = {
    showModal: PropTypes.bool.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    modalInput: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { addUserRequest } = this.props;
    const { modalInput } = this.state;
    addUserRequest(modalInput);
  };

  render() {
    const { modalInput } = this.state;
    const { showModal } = this.props;
    return (
      showModal && (
        <Background>
          <ModalContainer>
            <Div align="center">
              <p>Add new user</p>
            </Div>
            <div>
              <Form onSubmit={this.handleFormSubmit}>
                <input
                  type="text"
                  placeholder="Github username"
                  value={modalInput}
                  onChange={event => this.setState({ modalInput: event.target.value })}
                />
                <Div align="space-between">
                  <Button type="button" onClick={this.cancel} color="#ddd">
                    Cancel
                  </Button>
                  <Button type="submit" color="#5cdb95">
                    Save
                  </Button>
                </Div>
              </Form>
            </div>
          </ModalContainer>
        </Background>
      )
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
