import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import { Container } from './styles';

const More = () => (
  <View>
    <Text>More</Text>
  </View>
);

const TabIcon = ({ tintColor }) => <Icon name="dots-vertical" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

More.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default More;
