import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
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

export default class Map extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {};

  render() {
    return (
      <Container>
        <MapGoogle />
        <Filters />
        <Header />
      </Container>
    );
  }
}
