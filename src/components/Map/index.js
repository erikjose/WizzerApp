import React, { Component } from 'react';
import MapView from 'react-native-maps';

import List from '~/components/List';

import { Container, styles } from './styles';

export default class MapGoogle extends Component {
  state = {};

  render() {
    return (
      <Container>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <List />
      </Container>
    );
  }
}
