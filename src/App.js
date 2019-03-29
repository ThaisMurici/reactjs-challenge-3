import React, { Component, Fragment } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import GlobalStyle from './styles/global';
import UserList from './components/UserList';

class App extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
    users: [
      {
        is: 1,
        login: 'ThaisMurici',
        name: 'Thais Moraes',
        avatar: 'https://avatars3.githubusercontent.com/u/16256916?v=4',
      },
      {
        id: 2,
        login: 'ThaisMurici',
        name: 'Thais Moraes',
        avatar: 'https://avatars3.githubusercontent.com/u/16256916?v=4',
      },
      {
        id: 3,
        login: 'ThaisMurici',
        name: 'Thais Moraes',
        avatar: 'https://avatars3.githubusercontent.com/u/16256916?v=4',
      },
    ],
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
    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  };

  render() {
    const { viewport, users } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
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
        <UserList users={users} />
      </Fragment>
    );
  }
}

export default App;
