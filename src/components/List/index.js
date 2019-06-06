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
  navigation.navigate('Property', { property });
};

const ListProperty = ({ property, navigation }) => (
  <Container
    data={property}
    renderItem={({ item }) => (
      <ListItem onPress={() => handleNavigation(navigation, item)} transaction={item.transaction}>
        <HeaderItem>
          <ItemImage
            source={require('~/assets/placeholder.jpg')}
            resizeMethod="resize"
            resizeMode="cover"
          />
          <TransactionBox transaction={item.transaction}>
            <TransactionText>{item.transaction}</TransactionText>
          </TransactionBox>
        </HeaderItem>
        <InfoBox>
          <GeneralInfo>
            <PriceText>{item.price}</PriceText>
            <PropertyInfo />
          </GeneralInfo>
          <AddressInfo>
            <AddressText>{`${item.property.street}, ${item.property.number}`}</AddressText>
            <CityText>
              {`${item.property.neighborhood} - ${item.property.city}, ${item.property.state}`}
            </CityText>
          </AddressInfo>
        </InfoBox>
      </ListItem>
    )}
    keyExtractor={item => item.advert_id.toString()}
  />
);

const mapStateToProps = state => ({
  property: state.properties.property,
});

export default connect(mapStateToProps)(ListProperty);
