import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { withNavigation } from 'react-navigation';

import List from '~/components/List';

import { Container, styles } from './styles';

class MapGoogle extends Component {
  state = {};

  render() {
    const { navigation } = this.props;

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
        >
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
        </MapView>
        <List navigation={navigation} />
      </Container>
    );
  }
}

export default withNavigation(MapGoogle);
