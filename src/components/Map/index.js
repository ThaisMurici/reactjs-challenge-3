import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import * as ModalActions from '../../store/actions/modal';
import * as LocationActions from '../../store/actions/location';

class Map extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
    setClickedLocation: PropTypes.func.isRequired,
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
    const [latitude, longitude] = event.lngLat;
    const { showModal, setClickedLocation } = this.props;
    console.tron.log(this.props);
    showModal();
    setClickedLocation(latitude, longitude);
  };

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        onViewportChange={newViewport => this.setState({ viewport: newViewport })}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        <Marker
          latitude={-23.5439948}
          longitude={-46.6065452}
          onClick={this.handleMapClick}
          captureClick
        >
          <img
            style={{
              borderRadius: 100,
              width: 48,
              height: 48,
            }}
            alt="avatar"
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
          />
        </Marker>
      </ReactMapGL>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...LocationActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Map);
