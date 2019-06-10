import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, PermissionsAndroid } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TheActions from '~/store/actions';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '~/components/Header';
import Filters from '~/components/Filters';
import MapGoogle from '~/components/Map';

import { Container } from './styles';

const TabIcon = ({ tintColor }) => <Icon name="magnify" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

async function requestLocation(setUserLocation, setBounds, callbackSuccess) {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Veja imóveis pŕoximos a você',
        message:
          'Permita que o Wizzer acesse a sua localização para ver os imóveis nas proximidades ou para guiarmos você até um imóvel',
        buttonNeutral: 'Depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // If assync storage is defined, goes to async storage location
      // Else goes to userlocation
      navigator.geolocation.getCurrentPosition((value) => {
        setUserLocation(value.coords.latitude, value.coords.longitude);
        setBounds({
          latitude: value.coords.latitude,
          longitude: value.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });

        callbackSuccess();
      });
    } else {
      // If assync storage is defined, goes to async storage location
      // Else goes to default location (all Brazil)
      console.log('NOT OK');
    }
  } catch (error) {
    console.log(error);
  }
}

class Map extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {};

  async componentDidMount() {
    await requestLocation(this.props.setUserLocation, this.props.setBounds, this.watchID);
  }

  watchID = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        this.props.setUserLocation(position.coords.latitude, position.coords.longitude);
      },
      () => {},
      { enableHighAccuracy: true, distanceFilter: 0 },
    );
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <Container>
          <StatusBar hidden={false} />
          <MapGoogle />
          <Filters />
          <Header />
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  uri: state.query,
});

const mapDispatchToProps = dispatch => bindActionCreators(TheActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
