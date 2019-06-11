import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { colors } from '~/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TheActions from '~/store/actions';
import api from '~/services/api';

import {
  Container, SearchBox, SearchInput, SearchButton,
} from './styles';

const getQuery = async (query) => {
  let newValue = [];
  const storageQuery = JSON.parse(await AsyncStorage.getItem('@Query:uri'));

  if (storageQuery === null) {
    newValue.push(query);
  } else {
    const uriFilter = storageQuery.filter(item => item !== query);
    if (uriFilter.length > 9) {
      uriFilter.pop();
    }
    newValue = [query, ...uriFilter];
  }

  await AsyncStorage.setItem('@Query:uri', JSON.stringify(newValue));
};

const getGeocode = async (query, setGeocode, region, filters, getProperties) => {
  try {
    const response = await api.get('/geocode', {
      params: { query },
    });

    const { geocode } = response.data;

    setGeocode(geocode);

    getProperties(region, filters);

    getQuery(query);
  } catch (error) {
    console.log(error);
  }
};

const Header = ({
  uri, filters, setQuery, setGeocode, getProperties,
}) => (
  <Container>
    <SearchBox>
      <Icon name="magnify" color={colors.regular} size={25} />
      <SearchInput
        placeholder="Pesquise aqui"
        value={uri.query}
        onChangeText={text => setQuery(text)}
      />
      <SearchButton
        onPress={() => getGeocode(uri.query, setGeocode, uri.region, filters.filters, getProperties)
        }
      >
        <Icon
          name="map-marker-outline"
          color={colors.regular}
          size={25}
          style={{ transform: [{ rotate: '-135deg' }] }}
        />
      </SearchButton>
    </SearchBox>
  </Container>
);

const mapStateToProps = state => ({
  uri: state.query,
  filters: state.filters,
});

const mapDispatchToProps = dispatch => bindActionCreators(TheActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
