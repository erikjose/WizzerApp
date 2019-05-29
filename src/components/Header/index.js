import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';
import { connect } from 'react-redux';

import {
  Container, SearchBox, SearchInput, SearchButton,
} from './styles';

const Header = ({ uri, setQuery }) => (
  <Container>
    <SearchBox>
      <Icon name="magnify" color={colors.regular} size={25} />
      <SearchInput
        placeholder="Pesquise aqui"
        value={uri.query}
        onChangeText={text => setQuery(text)}
      />
      <SearchButton>
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

const mapDispatchToProps = dispatch => ({
  setQuery: value => dispatch({ type: 'SET_QUERY', query: value }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
