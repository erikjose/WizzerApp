import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';

import {
  Container, SearchBox, SearchInput, SearchButton,
} from './styles';

export default class Header extends Component {
  state = {};

  render() {
    return (
      <Container>
        <SearchBox>
          <Icon name="magnify" color={colors.regular} size={25} />
          <SearchInput placeholder="Pesquise aqui" />
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
  }
}
