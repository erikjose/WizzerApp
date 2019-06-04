import React, { Component } from 'react';
import { Switch, View, TextInput } from 'react-native';

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
  state = {};

  render() {
    return (
      <Container>
        <FilterItem>
          <FilterItemText>Transação</FilterItemText>
          <FilterItemArrow />
        </FilterItem>
        <FilterItem>
          <FilterItemText>Preço</FilterItemText>
          <FilterItemArrow />
        </FilterItem>
        <FilterItem>
          <FilterItemText>Tipo</FilterItemText>
          <FilterItemArrow />
        </FilterItem>
        <FilterItem>
          <FilterItemText>Mais</FilterItemText>
          <FilterItemArrow />
        </FilterItem>
        <FilterDropdown>
          <FilterDropdownContent style={{ display: 'none' }}>
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
                <Switch />
              </ContentItemControl>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <View style={styles.iconRent} />
                <ContentItemText>Para alugar</ContentItemText>
              </View>
              <ContentItemControl>
                <Switch />
              </ContentItemControl>
            </ContentItem>
          </FilterDropdownContent>

          <FilterDropdownContent style={{ display: 'none' }}>
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
              />
            </ContentItem>
          </FilterDropdownContent>

          <FilterDropdownContent style={{ display: 'none' }}>
            <ContentTitleBox>
              <ContentTitle>Tipo do Imóvel </ContentTitle>
              <ContentSubtitle>(40 resultados)</ContentSubtitle>
            </ContentTitleBox>
            <ContentItem>
              <ContentItemText style={{ fontWeight: '500' }}>Residencial</ContentItemText>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Apartamento</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Casa</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Casa de Condomínio</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Chácara</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Cobertura</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Flat</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Studio</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <ContentItemText style={{ fontWeight: '500' }}>Comercial</ContentItemText>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Terreno</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Armazém/Galpão</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Conjunto Comercial</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Fazenda/Sítio</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Loja</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Sala Comercial</ContentItemText>
              </View>
            </ContentItem>
            <ContentItem>
              <View style={styles.transactionText}>
                <Switch style={{ marginRight: 5 }} />
                <ContentItemText>Prédio Comercial</ContentItemText>
              </View>
            </ContentItem>
          </FilterDropdownContent>

          <FilterDropdownContent>
            <ContentItem>
              <ContentItemText style={{ fontWeight: '500' }}>Quartos</ContentItemText>
            </ContentItem>
            <ContentItem>
              <CheckOption style={{ borderLeftWidth: 1 }}>
                <CheckOptionText>1</CheckOptionText>
              </CheckOption>
              <CheckOption>
                <CheckOptionText>2</CheckOptionText>
              </CheckOption>
              <CheckOption>
                <CheckOptionText>3</CheckOptionText>
              </CheckOption>
              <CheckOption>
                <CheckOptionText>4</CheckOptionText>
              </CheckOption>
              <CheckOption>
                <CheckOptionText>5+</CheckOptionText>
              </CheckOption>
            </ContentItem>
            <ContentItem>
              <ContentItemText style={{ fontWeight: '500' }}>Banheiros</ContentItemText>
            </ContentItem>
            <ContentItem>
              <CheckOption style={{ borderLeftWidth: 1 }}>
                <CheckOptionText>1</CheckOptionText>
              </CheckOption>
              <CheckOption>
                <CheckOptionText>2</CheckOptionText>
              </CheckOption>
              <CheckOption>
                <CheckOptionText>3</CheckOptionText>
              </CheckOption>
              <CheckOption>
                <CheckOptionText>4</CheckOptionText>
              </CheckOption>
              <CheckOption>
                <CheckOptionText>5+</CheckOptionText>
              </CheckOption>
            </ContentItem>
            <ContentItem>
              <ContentItemText style={{ fontWeight: '500' }}>Vagas</ContentItemText>
            </ContentItem>
            <ContentItem>
              <CheckOption style={{ borderLeftWidth: 1 }}>
                <CheckOptionText>1</CheckOptionText>
              </CheckOption>
              <CheckOption>
                <CheckOptionText>2</CheckOptionText>
              </CheckOption>
              <CheckOption>
                <CheckOptionText>3</CheckOptionText>
              </CheckOption>
              <CheckOption>
                <CheckOptionText>4</CheckOptionText>
              </CheckOption>
              <CheckOption>
                <CheckOptionText>5+</CheckOptionText>
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
              />
            </ContentItem>
          </FilterDropdownContent>

          <FilterDropdownControls>
            <FilterCancelButton>
              <CancelButtonText>Cancelar</CancelButtonText>
            </FilterCancelButton>
            <FilterConfirmButton>
              <ConfirmButtonText>Confirmar</ConfirmButtonText>
            </FilterConfirmButton>
          </FilterDropdownControls>
        </FilterDropdown>
      </Container>
    );
  }
}
