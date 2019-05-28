import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <View>
        <Text> Mapa </Text>
      </View>
    );
  }
}
