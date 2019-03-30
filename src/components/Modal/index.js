import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Background, ModalContainer, Form, Div, Button,
} from './styles';

class Modal extends Component {
  static propTypes = {
    showModal: PropTypes.bool.isRequired,
  };

  state = {
    modalInput: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
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

export default connect(mapStateToProps)(Modal);
