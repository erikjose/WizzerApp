import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';

const Highlights = () => (
  <View>
    <Text>Highlights</Text>
  </View>
);

const TabIcon = ({ tintColor }) => <Icon name="home-outline" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Highlights.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Highlights;
