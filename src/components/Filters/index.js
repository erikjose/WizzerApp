import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {
  Container, FilterItem, FilterItemTitle, FilterItemDropdown,
} from './styles';

export default class Filters extends Component {
  state = {};

  render() {
    return (
      <Container>
        <FilterItem>
          <FilterItemTitle>Transação</FilterItemTitle>
          {/* <FilterItemDropdown /> */}
        </FilterItem>
        <FilterItem>
          <FilterItemTitle>Preço</FilterItemTitle>
          {/* <FilterItemDropdown /> */}
        </FilterItem>
        <FilterItem>
          <FilterItemTitle>Tipo</FilterItemTitle>
          {/* <FilterItemDropdown /> */}
        </FilterItem>
        <FilterItem>
          <FilterItemTitle>Mais</FilterItemTitle>
          {/* <FilterItemDropdown /> */}
        </FilterItem>
      </Container>
    );
  }
}
