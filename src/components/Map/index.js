import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import * as ModalActions from '../../store/actions/modal';
import * as LocationActions from '../../store/actions/location';

import UserMarker from '../UserMarker';

class Map extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    setClickedLocation: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        login: PropTypes.string,
        username: PropTypes.string,
        avatar: PropTypes.string,
      }),
    ).isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (event) => {
    const [longitude, latitude] = event.lngLat;
    const { showModal, setClickedLocation } = this.props;
    showModal();
    setClickedLocation(latitude, longitude);
  };

  render() {
    const { viewport } = this.state;
    const { users } = this.props;
    return (
      <ReactMapGL
        {...viewport}
        onViewportChange={newViewport => this.setState({ viewport: newViewport })}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        {users.map(user => (
          <UserMarker key={user.id} user={user} />
        ))}
      </ReactMapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...LocationActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
