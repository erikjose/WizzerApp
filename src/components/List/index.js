import React, { Component } from 'react';
import { connect } from 'react-redux';
import Intl from 'intl';
import locale from 'intl/locale-data/jsonp/pt-BR';

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

  render() {
    const { property, navigation, initialScrollIndex } = this.props;
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
  }
}

const mapStateToProps = state => ({
  property: state.properties.property,
});

export default connect(mapStateToProps)(ListProperty);
