import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TheActions from '~/store/actions';
import api from '~/services/api';

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
    const newStorage = this.state.history;
    newStorage.splice(index, 1);
    this.setState({
      history: newStorage,
    });

    await AsyncStorage.setItem('@Query:uri', JSON.stringify(newStorage));
  };

  handlerItem = async (query) => {
    const { setGeocode, filters, getProperties } = this.props;
    try {
      this.props.navigation.navigate('Home');

      const response = await api.get('/geocode', {
        params: { query },
      });

      const { geocode } = response.data;

      setGeocode(geocode);

      const { geometry } = geocode.results[0];

      const region = {
        latitude: geometry.location.lat,
        longitude: geometry.location.lng,
        latitudeDelta: Math.abs(geometry.viewport.northeast.lat - geometry.viewport.southwest.lat),
        longitudeDelta: Math.abs(geometry.viewport.northeast.lng - geometry.viewport.southwest.lng),
      };

      getProperties(region, filters);
    } catch (error) {
      console.tron.log(error);
    }
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
              <TouchableOpacity onPress={() => this.handlerItem(item)}>
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

const mapStateToProps = state => ({
  uri: state.query,
  filters: state.filters,
  region: state.query.region,
});

const mapDispatchToProps = dispatch => bindActionCreators(TheActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(History);
