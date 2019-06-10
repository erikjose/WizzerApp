import React, { Component } from 'react';
import {
  StatusBar, KeyboardAvoidingView, PermissionsAndroid, Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TheActions from '~/store/actions';
import AsyncStorage from '@react-native-community/async-storage';

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
      navigator.geolocation.getCurrentPosition(async (value) => {
        const region = await AsyncStorage.getItem('@region');
        if (region != null) {
          // If assync storage is defined, goes to async storage location
          setBounds(JSON.parse(region));
        } else {
          // Else goes to userlocation
          setBounds({
            latitude: value.coords.latitude,
            longitude: value.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        }
        setUserLocation(value.coords.latitude, value.coords.longitude);
        callbackSuccess();
      });
    } else {
      const region = await AsyncStorage.getItem('@region');
      if (region != null) {
        // If assync storage is defined, goes to async storage location
        setBounds(JSON.parse(region));
      }
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
    if (Platform.OS == 'android') {
      await requestLocation(this.props.setUserLocation, this.props.setBounds, this.watchID);
    } else {
      navigator.geolocation.getCurrentPosition(async (value) => {
        const region = await AsyncStorage.getItem('@region');
        if (region != null) {
          // If assync storage is defined, goes to async storage location
          this.props.setBounds(JSON.parse(region));
        } else {
          // Else goes to userlocation
          this.props.setBounds({
            latitude: value.coords.latitude,
            longitude: value.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          });
        }
        this.props.setUserLocation(value.coords.latitude, value.coords.longitude);
        this.watchID();
      });
    }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  watchID = () => navigator.geolocation.watchPosition(
    (position) => {
      this.props.setUserLocation(position.coords.latitude, position.coords.longitude);
    },
    () => {},
    { enableHighAccuracy: true, distanceFilter: 10 },
  );

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
