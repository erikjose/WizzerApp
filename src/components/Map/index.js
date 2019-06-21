import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { NavigationEvents, withNavigation } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TheActions from '~/store/actions';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, metrics } from '~/styles';
import AsyncStorage from '@react-native-community/async-storage';
import mapStyle from './mapstyle';

import List from '~/components/List';

import { Container, styles } from './styles';

const setStorage = async (region) => {
  try {
    await AsyncStorage.setItem('@region', JSON.stringify(region));
  } catch (error) {
    // Do nothing;
  }
};

class MapGoogle extends Component {
  state = {
    showList: false,
    initialScrollIndex: null,
  };

  render() {
    const {
      uri, setBounds, navigation, property, filters, getProperties,
    } = this.props;
    const { showList, initialScrollIndex } = this.state;
    return (
      <Container>
        <NavigationEvents
          onDidFocus={() => this.setState({ showList: false, initialScrollIndex: null })}
        />
        <MapView
          style={styles.mapView}
          region={uri.region}
          customMapStyle={mapStyle}
          // provider="google"
          onPanDrag={() => {
            if (showList) {
              this.setState({ showList: false });
            }
          }}
          onPress={() => {
            if (showList) {
              this.setState({ showList: false });
            }
          }}
          onRegionChangeComplete={(region) => {
            setBounds(region);
            getProperties(region, filters);
            if (
              !(
                region.latitude === -14.902322
                && region.longitude === -54.18457
                && region.latitudeDelta === 41.348938
                && region.longitudeDelta === 41.132812
              )
            ) setStorage(region);
          }}
        >
          {property.map((item, index) => (
            <Marker
              coordinate={{ latitude: item.property.lat, longitude: item.property.lng }}
              key={item.advert_id.toString()}
              onPress={() => {
                this.setState({ showList: true, initialScrollIndex: index });
              }}
            >
              <Icon
                name="circle-slice-8"
                size={Math.log2(360 * (metrics.screenWidth / 256 / uri.region.longitudeDelta)) + 1}
                color={item.transaction === 'alugar' ? colors.secundary : colors.primary}
              />
            </Marker>
          ))}
          {uri.user.latitude != null && uri.user.longitude != null ? (
            <Marker coordinate={uri.user} key="user">
              <Icon
                name="crosshairs-gps"
                size={Math.log2(360 * (metrics.screenWidth / 256 / uri.region.longitudeDelta)) + 10}
                color="#f34530"
              />
            </Marker>
          ) : null}
        </MapView>
        {showList ? <List navigation={navigation} initialScrollIndex={initialScrollIndex} /> : null}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  uri: state.query,
  property: state.properties.property,
  filters: state.filters.filters,
});

const mapDispatchToProps = dispatch => bindActionCreators(TheActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(MapGoogle));
