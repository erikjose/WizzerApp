import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as QueryActions from '~/store/actions/query';
import api from '~/services/api';

import {
  Container, SearchBox, SearchInput, SearchButton,
} from './styles';

const getGeocode = async (query, setGeocode) => {
  try {
    const response = await api.get('/geocode', {
      params: { query },
    });

    const { geocode } = response.data;

    setGeocode(geocode);
  } catch (error) {
    console.log(error);
  }
};

const Header = ({ uri, setQuery }) => (
  <Container>
    <SearchBox>
      <Icon name="magnify" color={colors.regular} size={25} />
      <SearchInput
        placeholder="Pesquise aqui"
        value={uri.query}
        onChangeText={text => setQuery(text)}
      />
      <SearchButton onPress={() => getGeocode(uri.query)}>
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
});

const mapDispatchToProps = dispatch => bindActionCreators(QueryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
