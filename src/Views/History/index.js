import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container, Header, Title, RenderList, RenderItemList, RenderTitleList,
} from './styles';
import { styles } from '../Highlights/styles';

const TabIcon = ({ tintColor }) => (
  <Icon name="feature-search-outline" size={20} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

class History extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    history: null,
  };

  componentDidMount() {}

  getStorage = async () => {
    const storageQuery = JSON.parse(await AsyncStorage.getItem('@Query:uri'));

    this.setState({
      history: storageQuery,
    });
  };

  removeItem = async (index) => {
    console.tron.log(index);
  };

  render() {
    const { history } = this.state;
    return (
      <Container>
        <NavigationEvents onDidFocus={() => this.getStorage()} />
        <Header>
          <Title>Buscas salvas</Title>
        </Header>
        <RenderList
          data={history}
          renderItem={({ item, index }) => (
            <RenderItemList key={index}>
              <TouchableOpacity>
                <RenderTitleList>{item}</RenderTitleList>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.removeItem(index)}>
                <Icon name="close" size={16} style={styles.icon} />
              </TouchableOpacity>
            </RenderItemList>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Container>
    );
  }
}

export default History;
