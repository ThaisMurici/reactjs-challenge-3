import React from 'react';
import { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';

import { Img } from './styles';

const UserMarker = ({ user }) => (
  <Marker
    latitude={user.location.latitude}
    longitude={user.location.longitude}
    onClick={() => {}}
    captureClick
  >
    <Img alt="avatar" src={user.avatar} />
  </Marker>
);

UserMarker.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    location: PropTypes.shape({
      latitute: PropTypes.number,
      longitude: PropTypes.number,
    }),
  }).isRequired,
};

export default UserMarker;
