import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  ListItem,
  HeaderItem,
  ItemImage,
  TransactionBox,
  TransactionText,
  InfoBox,
  GeneralInfo,
  PriceText,
  PropertyInfo,
  AddressInfo,
  AddressText,
  CityText,
} from './styles';

const ListProperty = ({ property, navigation }) => (
  <Container
    data={property}
    renderItem={({ item }) => (
      <ListItem onPress={() => navigation.navigate('Property')} transaction={item.transation}>
        <HeaderItem>
          <ItemImage
            source={require('~/assets/placeholder.jpg')}
            resizeMethod="resize"
            resizeMode="cover"
          />
          <TransactionBox transaction={item.transation}>
            <TransactionText>{item.transation}</TransactionText>
          </TransactionBox>
        </HeaderItem>
        <InfoBox>
          <GeneralInfo>
            <PriceText>{item.price}</PriceText>
            <PropertyInfo />
          </GeneralInfo>
          <AddressInfo>
            <AddressText>Rua Juvenal Cardoso, 65</AddressText>
            <CityText>Residencial Belo Horizonte - Varginha, MG</CityText>
          </AddressInfo>
        </InfoBox>
      </ListItem>
    )}
    keyExtractor={item => item.id}
  />
);

const mapStateToProps = state => ({
  property: state.properties.property,
});

export default connect(mapStateToProps)(ListProperty);
