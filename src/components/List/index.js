import React, { Component } from 'react';
import { connect } from 'react-redux';
import Intl from 'intl';
import locale from 'intl/locale-data/jsonp/pt-BR';
import { Image, Text } from 'react-native';
import getDirections from 'react-native-google-maps-directions';

import { metrics } from '~/styles';

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
  PropertyDetails,
  NavigationButton,
  AddressInfo,
  AddressText,
  CityText,
} from './styles';

const handleNavigation = (navigation, property) => {
  navigation.navigate('Property', { property });
};

class ListProperty extends Component {
  componentDidUpdate() {
    this.scrollToIndex();
  }

  scrollToIndex = () => {
    this.flatListRef.scrollToIndex({ animated: true, index: this.props.initialScrollIndex });
  };

  handleNavigation = (property) => {
    const { user } = this.props;
    const data = {
      source: {
        latitude: user.latitude,
        longitude: user.longitude,
      },
      destination: {
        latitude: property.lat,
        longitude: property.lng,
      },
      params: [
        {
          key: 'travelmode',
          value: 'driving',
        },
        {
          key: 'dir_action',
          value: 'navigate',
        },
      ],
    };

    getDirections(data);
  };

  render() {
    const {
      property, navigation, initialScrollIndex, user,
    } = this.props;
    return (
      <Container
        data={property}
        getItemLayout={(data, index) => ({
          length: metrics.screenWidth * 0.93,
          offset: metrics.screenWidth * 0.93 * index,
          index,
        })}
        initialScrollIndex={initialScrollIndex}
        ref={(ref) => {
          this.flatListRef = ref;
        }}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => handleNavigation(navigation, item)}
            transaction={item.transaction}
          >
            <HeaderItem>
              <ItemImage
                source={{ uri: `https://api.wizzer.com.br/storage/${item.property.picture[0]}` }}
                resizeMethod="resize"
                resizeMode="cover"
              />
              <TransactionBox transaction={item.transaction}>
                <TransactionText>{item.transaction}</TransactionText>
              </TransactionBox>
            </HeaderItem>
            <InfoBox>
              <GeneralInfo>
                <PriceText>
                  {new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(item.price)}
                </PriceText>
                <PropertyInfo>
                  <PropertyDetails />
                  {user.latitude != null && user.longitude != null ? (
                    <NavigationButton onPress={() => this.handleNavigation(item.property)}>
                      <Image
                        source={require('~/assets/navigation_icon.png')}
                        resizeMethod="resize"
                        resizeMode="contain"
                        style={{ height: 25, opacity: 0.5 }}
                      />
                      <Text style={{ fontSize: 15, color: '#777', marginLeft: -15 }}>Rota</Text>
                    </NavigationButton>
                  ) : null}
                </PropertyInfo>
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
  }
}

const mapStateToProps = state => ({
  property: state.properties.property,
  user: state.query.user,
});

export default connect(mapStateToProps)(ListProperty);
