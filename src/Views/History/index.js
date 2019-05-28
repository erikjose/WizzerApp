import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';

const History = () => (
  <View>
    <Text>History</Text>
  </View>
);

const TabIcon = ({ tintColor }) => (
  <Icon name="feature-search-outline" size={20} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

History.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default History;
