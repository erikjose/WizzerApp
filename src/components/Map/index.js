import React, { Component } from 'react';
import MapView from 'react-native-maps';

import { Container, styles } from './styles';

export default class MapGoogle extends Component {
  state = {};

  render() {
    return (
      <Container>
        <MapView style={styles.mapView} />
      </Container>
    );
  }
}
