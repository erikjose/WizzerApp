import React from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

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

const handleNavigation = (navigation, property) => {
  console.tron.log(property);
  navigation.navigate('Property', { property });
};

const ListProperty = ({ property, navigation }) => (
  <Container
    data={property}
    renderItem={({ item }) => (
      <ListItem onPress={() => handleNavigation(navigation, item)} transaction={item.transation}>
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
            <AddressText>{`${item.address}, ${item.number}`}</AddressText>
            <CityText>{`${item.neighborhood} - ${item.city}, ${item.state}`}</CityText>
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
