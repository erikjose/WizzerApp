import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import Intl from 'intl';
import locale from 'intl/locale-data/jsonp/pt-BR';

import {
  Container,
  Header,
  Title,
  RenderList,
  RenderItemList,
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
  DetailItem,
} from './styles';

const Highlights = ({ property, navigation }, props) => (
  <Container>
    <Header>
      <Title>Destaques</Title>
    </Header>

    <RenderList
      data={property}
      renderItem={({ item }) => (
        <RenderItemList
          transaction={item.transaction}
          onPress={() => navigation.navigate('Property', { property: item })}
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
            </GeneralInfo>
            <AddressInfo>
              <AddressText>{`${item.property.street}, ${item.property.number}`}</AddressText>
              <CityText>
                {`${item.property.neighborhood} - ${item.property.city}, ${item.property.state}`}
              </CityText>
            </AddressInfo>
          </InfoBox>
        </RenderItemList>
      )}
      keyExtractor={item => item.advert_id.toString()}
    />
  </Container>
);

const TabIcon = ({ tintColor }) => <Icon name="home-outline" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Highlights.navigationOptions = {
  tabBarIcon: TabIcon,
};

const mapStateToProps = state => ({
  property: state.properties.property,
});

export default connect(mapStateToProps)(Highlights);
