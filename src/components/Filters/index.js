import React, { Component } from 'react';
import { Switch, View, TextInput } from 'react-native';
import Intl from 'intl';
import locale from 'intl/locale-data/jsonp/pt-BR';

import {
  Container,
  FilterItem,
  FilterItemText,
  FilterItemArrow,
  FilterDropdown,
  FilterDropdownContent,
  ContentTitleBox,
  ContentTitle,
  ContentSubtitle,
  ContentItem,
  ContentItemText,
  ContentItemControl,
  FilterDropdownControls,
  FilterCancelButton,
  CancelButtonText,
  FilterConfirmButton,
  ConfirmButtonText,
  styles,
  CheckOption,
  CheckOptionText,
} from './styles';

export default class Filters extends Component {
  state = {
    selectedFilter: null,
    filters: {
      transaction: ['vender', 'alugar'],
      propertyType: [],
      price: { min: 0, max: 0 },
      condo: { min: 0, max: 0 },
      area: { min: 0, max: 0 },
      bedroom: [],
      bathroom: [],
      parkingSpace: [],
      daysOnWizzer: 0,
    },
  };

  setSwitch(state, value) {
    const { filters } = this.state;

    if (value === 'alugar' || value === 'vender') {
      if (state) {
        filters.transaction.push(value);
      } else {
        filters.transaction = filters.transaction.filter(item => item !== value);
      }
    } else if (state) {
      filters.propertyType.push(value);
    } else {
      filters.propertyType = filters.propertyType.filter(item => item !== value);
    }

    this.setState({ filters });
  }

  setBedroom(value) {
    const { filters } = this.state;

    if (filters.bedroom.includes(value)) {
      filters.bedroom = filters.bedroom.filter(item => item != value);
    } else {
      filters.bedroom.push(value);
    }

    this.setState({ filters });
  }

  setBathroom(value) {
    const { filters } = this.state;

    if (filters.bathroom.includes(value)) {
      filters.bathroom = filters.bathroom.filter(item => item != value);
    } else {
      filters.bathroom.push(value);
    }

    this.setState({ filters });
  }

  setParkingSpace(value) {
    const { filters } = this.state;

    if (filters.parkingSpace.includes(value)) {
      filters.parkingSpace = filters.parkingSpace.filter(item => item != value);
    } else {
      filters.parkingSpace.push(value);
    }

    this.setState({ filters });
  }

  render() {
    const { selectedFilter, filters } = this.state;
    let dropdown;
    if (selectedFilter != null) {
      dropdown = (
        <FilterDropdown>
          {selectedFilter === 1 ? (
            <FilterDropdownContent>
              <ContentTitleBox>
                <ContentTitle>Tipo de Transação </ContentTitle>
                <ContentSubtitle>(40 resultados)</ContentSubtitle>
              </ContentTitleBox>
              <ContentItem>
                <View style={styles.transactionText}>
                  <View style={styles.iconSell} />
                  <ContentItemText>À venda</ContentItemText>
                </View>
                <ContentItemControl>
                  <Switch
                    onValueChange={value => this.setSwitch(value, 'vender')}
                    value={filters.transaction.includes('vender')}
                  />
                </ContentItemControl>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <View style={styles.iconRent} />
                  <ContentItemText>Para alugar</ContentItemText>
                </View>
                <ContentItemControl>
                  <Switch
                    onValueChange={value => this.setSwitch(value, 'alugar')}
                    value={filters.transaction.includes('alugar')}
                  />
                </ContentItemControl>
              </ContentItem>
            </FilterDropdownContent>
          ) : null}

          {selectedFilter === 2 ? (
            <FilterDropdownContent>
              <ContentTitleBox>
                <ContentTitle>Preço do Imóvel </ContentTitle>
                <ContentSubtitle>(40 resultados)</ContentSubtitle>
              </ContentTitleBox>
              <ContentItem>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    flex: 1,
                    marginRight: 5,
                  }}
                  placeholder="R$ 00,00"
                  onChangeText={(text) => {
                    if (text.includes(',00')) {
                      // Adds a number
                      filters.price.min = text.replace(',00', '').replace(/\D/gi, '');
                    } else {
                      // Removes a number
                      filters.price.min = text.replace(/\D/gi, '').slice(0, -2);
                    }
                    this.setState({ filters });
                  }}
                  value={(new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: 'BRL',
                  })).format(filters.price.min)}
                />
                <ContentItemText
                  style={{
                    fontSize: 14,
                    fontWeight: '300',
                  }}
                >
                  {' '}
                  Até
                  {' '}
                </ContentItemText>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    flex: 1,
                    marginLeft: 5,
                  }}
                  placeholder="R$ 00,00"
                  onChangeText={(text) => {
                    if (text.includes(',00')) {
                      // Adds a number
                      filters.price.max = text.replace(',00', '').replace(/\D/gi, '');
                    } else {
                      // Removes a number
                      filters.price.max = text.replace(/\D/gi, '').slice(0, -2);
                    }
                    this.setState({ filters });
                  }}
                  value={(new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: 'BRL',
                  })).format(filters.price.max)}
                />
              </ContentItem>
            </FilterDropdownContent>
          ) : null}

          {selectedFilter === 3 ? (
            <FilterDropdownContent>
              <ContentTitleBox>
                <ContentTitle>Tipo do Imóvel </ContentTitle>
                <ContentSubtitle>(40 resultados)</ContentSubtitle>
              </ContentTitleBox>
              <ContentItem>
                <ContentItemText style={{ fontWeight: '500' }}>Residencial</ContentItemText>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'apartment')}
                    value={filters.propertyType.includes('apartment')}
                  />
                  <ContentItemText>Apartamento</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'house')}
                    value={filters.propertyType.includes('house')}
                  />
                  <ContentItemText>Casa</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'condo')}
                    value={filters.propertyType.includes('condo')}
                  />
                  <ContentItemText>Casa de Condomínio</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'farmhouse')}
                    value={filters.propertyType.includes('farmhouse')}
                  />
                  <ContentItemText>Chácara</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'roof')}
                    value={filters.propertyType.includes('roof')}
                  />
                  <ContentItemText>Cobertura</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'flat')}
                    value={filters.propertyType.includes('flat')}
                  />
                  <ContentItemText>Flat</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'studio')}
                    value={filters.propertyType.includes('studio')}
                  />
                  <ContentItemText>Studio</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <ContentItemText style={{ fontWeight: '500' }}>Comercial</ContentItemText>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'land')}
                    value={filters.propertyType.includes('land')}
                  />
                  <ContentItemText>Terreno</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'warehouse')}
                    value={filters.propertyType.includes('warehouse')}
                  />
                  <ContentItemText>Armazém/Galpão</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'commercial_set')}
                    value={filters.propertyType.includes('commercial_set')}
                  />
                  <ContentItemText>Conjunto Comercial</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'farm')}
                    value={filters.propertyType.includes('farm')}
                  />
                  <ContentItemText>Fazenda/Sítio</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'store')}
                    value={filters.propertyType.includes('store')}
                  />
                  <ContentItemText>Loja</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'commercial_room')}
                    value={filters.propertyType.includes('commercial_room')}
                  />
                  <ContentItemText>Sala Comercial</ContentItemText>
                </View>
              </ContentItem>
              <ContentItem>
                <View style={styles.transactionText}>
                  <Switch
                    style={{ marginRight: 5 }}
                    onValueChange={value => this.setSwitch(value, 'commercial_building')}
                    value={filters.propertyType.includes('commercial_building')}
                  />
                  <ContentItemText>Prédio Comercial</ContentItemText>
                </View>
              </ContentItem>
            </FilterDropdownContent>
          ) : null}

          {selectedFilter === 4 ? (
            <FilterDropdownContent>
              <ContentItem>
                <ContentItemText style={{ fontWeight: '500' }}>Quartos</ContentItemText>
              </ContentItem>
              <ContentItem>
                <CheckOption
                  style={{ borderLeftWidth: 1 }}
                  selected={filters.bedroom.includes(1)}
                  onPress={() => this.setBedroom(1)}
                >
                  <CheckOptionText selected={filters.bedroom.includes(1)}>1</CheckOptionText>
                </CheckOption>
                <CheckOption
                  selected={filters.bedroom.includes(2)}
                  onPress={() => this.setBedroom(2)}
                >
                  <CheckOptionText selected={filters.bedroom.includes(2)}>2</CheckOptionText>
                </CheckOption>
                <CheckOption
                  selected={filters.bedroom.includes(3)}
                  onPress={() => this.setBedroom(3)}
                >
                  <CheckOptionText selected={filters.bedroom.includes(3)}>3</CheckOptionText>
                </CheckOption>
                <CheckOption
                  selected={filters.bedroom.includes(4)}
                  onPress={() => this.setBedroom(4)}
                >
                  <CheckOptionText selected={filters.bedroom.includes(4)}>4</CheckOptionText>
                </CheckOption>
                <CheckOption
                  selected={filters.bedroom.includes(5)}
                  onPress={() => this.setBedroom(5)}
                >
                  <CheckOptionText selected={filters.bedroom.includes(5)}>5+</CheckOptionText>
                </CheckOption>
              </ContentItem>
              <ContentItem>
                <ContentItemText style={{ fontWeight: '500' }}>Banheiros</ContentItemText>
              </ContentItem>
              <ContentItem>
                <CheckOption
                  style={{ borderLeftWidth: 1 }}
                  selected={filters.bathroom.includes(1)}
                  onPress={() => this.setBathroom(1)}
                >
                  <CheckOptionText selected={filters.bathroom.includes(1)}>1</CheckOptionText>
                </CheckOption>
                <CheckOption
                  selected={filters.bathroom.includes(2)}
                  onPress={() => this.setBathroom(2)}
                >
                  <CheckOptionText selected={filters.bathroom.includes(2)}>2</CheckOptionText>
                </CheckOption>
                <CheckOption
                  selected={filters.bathroom.includes(3)}
                  onPress={() => this.setBathroom(3)}
                >
                  <CheckOptionText selected={filters.bathroom.includes(3)}>3</CheckOptionText>
                </CheckOption>
                <CheckOption
                  selected={filters.bathroom.includes(4)}
                  onPress={() => this.setBathroom(4)}
                >
                  <CheckOptionText selected={filters.bathroom.includes(4)}>4</CheckOptionText>
                </CheckOption>
                <CheckOption
                  selected={filters.bathroom.includes(5)}
                  onPress={() => this.setBathroom(5)}
                >
                  <CheckOptionText selected={filters.bathroom.includes(5)}>5+</CheckOptionText>
                </CheckOption>
              </ContentItem>
              <ContentItem>
                <ContentItemText style={{ fontWeight: '500' }}>Vagas</ContentItemText>
              </ContentItem>
              <ContentItem>
                <CheckOption
                  style={{ borderLeftWidth: 1 }}
                  selected={filters.parkingSpace.includes(1)}
                  onPress={() => this.setParkingSpace(1)}
                >
                  <CheckOptionText selected={filters.parkingSpace.includes(1)}>1</CheckOptionText>
                </CheckOption>
                <CheckOption
                  selected={filters.parkingSpace.includes(2)}
                  onPress={() => this.setParkingSpace(2)}
                >
                  <CheckOptionText selected={filters.parkingSpace.includes(2)}>2</CheckOptionText>
                </CheckOption>
                <CheckOption
                  selected={filters.parkingSpace.includes(3)}
                  onPress={() => this.setParkingSpace(3)}
                >
                  <CheckOptionText selected={filters.parkingSpace.includes(3)}>3</CheckOptionText>
                </CheckOption>
                <CheckOption
                  selected={filters.parkingSpace.includes(4)}
                  onPress={() => this.setParkingSpace(4)}
                >
                  <CheckOptionText selected={filters.parkingSpace.includes(4)}>4</CheckOptionText>
                </CheckOption>
                <CheckOption
                  selected={filters.parkingSpace.includes(5)}
                  onPress={() => this.setParkingSpace(5)}
                >
                  <CheckOptionText selected={filters.parkingSpace.includes(5)}>5+</CheckOptionText>
                </CheckOption>
              </ContentItem>
              <ContentItem>
                <ContentItemText style={{ fontWeight: '500' }}>Área</ContentItemText>
              </ContentItem>
              <ContentItem>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    flex: 1,
                    marginRight: 5,
                  }}
                  placeholder="0 m²"
                  onChangeText={(text) => {
                    filters.area.min = text;
                    this.setState({ filters });
                  }}
                />
                <ContentItemText
                  style={{
                    fontSize: 14,
                    fontWeight: '300',
                  }}
                >
                  {' '}
                  Até
                  {' '}
                </ContentItemText>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    flex: 1,
                    marginLeft: 5,
                  }}
                  placeholder="0m²"
                  onChangeText={(text) => {
                    filters.area.max = text;
                    this.setState({ filters });
                  }}
                />
              </ContentItem>
              <ContentItem>
                <ContentItemText style={{ fontWeight: '500' }}>Valor do Condomínio</ContentItemText>
              </ContentItem>
              <ContentItem>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    flex: 1,
                    marginRight: 5,
                  }}
                  placeholder="R$ 00,00"
                  onChangeText={(text) => {
                    if (text.includes(',00')) {
                      // Adds a number
                      filters.condo.min = text.replace(',00', '').replace(/\D/gi, '');
                    } else {
                      // Removes a number
                      filters.condo.min = text.replace(/\D/gi, '').slice(0, -2);
                    }
                    this.setState({ filters });
                  }}
                  value={(new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: 'BRL',
                  })).format(filters.condo.min)}
                />
                <ContentItemText
                  style={{
                    fontSize: 14,
                    fontWeight: '300',
                  }}
                >
                  {' '}
                  Até
                  {' '}
                </ContentItemText>
                <TextInput
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    flex: 1,
                    marginLeft: 5,
                  }}
                  placeholder="R$ 00,00"
                  onChangeText={(text) => {
                    if (text.includes(',00')) {
                      // Adds a number
                      filters.condo.max = text.replace(',00', '').replace(/\D/gi, '');
                    } else {
                      // Removes a number
                      filters.condo.max = text.replace(/\D/gi, '').slice(0, -2);
                    }
                    this.setState({ filters });
                  }}

                  value={(new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: 'BRL',
                  })).format(filters.condo.max)}
                />
              </ContentItem>
            </FilterDropdownContent>
          ) : null}

          <FilterDropdownControls>
            <FilterCancelButton onPress={() => this.setState({ selectedFilter: null })}>
              <CancelButtonText>Cancelar</CancelButtonText>
            </FilterCancelButton>
            <FilterConfirmButton onPress={() => {}}>
              <ConfirmButtonText>Confirmar</ConfirmButtonText>
            </FilterConfirmButton>
          </FilterDropdownControls>
        </FilterDropdown>
      );
    } else {
      dropdown = null;
    }

    return (
      <Container>
        <FilterItem
          selected={selectedFilter === 1}
          onPress={() => (selectedFilter === 1
            ? this.setState({ selectedFilter: null })
            : this.setState({ selectedFilter: 1 }))
          }
        >
          <FilterItemText selected={selectedFilter === 1}>Transação</FilterItemText>
          {selectedFilter === 1 ? <FilterItemArrow /> : null}
        </FilterItem>
        <FilterItem
          selected={selectedFilter === 2}
          onPress={() => (selectedFilter === 2
            ? this.setState({ selectedFilter: null })
            : this.setState({ selectedFilter: 2 }))
          }
        >
          <FilterItemText selected={selectedFilter === 2}>Preço</FilterItemText>
          {selectedFilter === 2 ? <FilterItemArrow /> : null}
        </FilterItem>
        <FilterItem
          selected={selectedFilter === 3}
          onPress={() => (selectedFilter === 3
            ? this.setState({ selectedFilter: null })
            : this.setState({ selectedFilter: 3 }))
          }
        >
          <FilterItemText selected={selectedFilter === 3}>Tipo</FilterItemText>
          {selectedFilter === 3 ? <FilterItemArrow /> : null}
        </FilterItem>
        <FilterItem
          selected={selectedFilter === 4}
          onPress={() => (selectedFilter === 4
            ? this.setState({ selectedFilter: null })
            : this.setState({ selectedFilter: 4 }))
          }
        >
          <FilterItemText selected={selectedFilter === 4}>Mais</FilterItemText>
          {selectedFilter === 4 ? <FilterItemArrow /> : null}
        </FilterItem>
        {dropdown}
      </Container>
    );
  }
}
