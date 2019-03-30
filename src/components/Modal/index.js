import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import {
  Background, ModalContainer, Form, Div, Button,
} from './styles';

import * as UserActions from '../../store/actions/users';
import * as ModalActions from '../../store/actions/modal';

class Modal extends Component {
  static propTypes = {
    showModalOnScreen: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    modalInput: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { addUserRequest } = this.props;
    const { modalInput } = this.state;
    addUserRequest(modalInput);
  };

  cancel = () => {
    const { hideModal } = this.props;
    hideModal();
  };

  handleKeyUp = (e) => {
    const { hideModal } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        hideModal();
      },
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };

  handleOutsideClick = (e) => {
    const { hideModal } = this.props;

    if (this.modalRef && !this.modalRef.contains(e.target)) {
      hideModal();
    }
  };

  assignReference = (node) => {
    this.modalRef = node;
  };

  render() {
    const { modalInput } = this.state;
    const { showModalOnScreen } = this.props;
    return (
      showModalOnScreen && (
        <Background>
          <ModalContainer ref={node => this.assignReference(node)}>
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
  showModalOnScreen: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, ...ModalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
