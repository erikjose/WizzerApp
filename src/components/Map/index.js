import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as QueryActions from '~/store/actions/query';
import { withNavigation } from 'react-navigation';

import List from '~/components/List';

import { Container, styles } from './styles';

const MapGoogle = ({
  uri, setBounds, navigation, property,
}) => (
  <Container>
    <MapView
      style={styles.mapView}
      region={uri.region}
      onRegionChangeComplete={region => setBounds(region)}
    >
      {console.tron.log(property)}
      {/* {property.forEach((element) => {
        <Marker coordinate={{ latitude: element.property.lat, longitude: element.property.lat }} />;
      })} */}
      {/* <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} /> */}
    </MapView>
    <List navigation={navigation} />
  </Container>
);

const mapStateToProps = state => ({
  uri: state.query,
  property: state.properties,
});

const mapDispatchToProps = dispatch => bindActionCreators(QueryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(MapGoogle));
