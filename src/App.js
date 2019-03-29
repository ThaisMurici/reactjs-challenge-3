import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class App extends Component {
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

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        onViewportChange={newViewport => this.setState({ viewport: newViewport })}
      />
    );
  }
}

export default App;
