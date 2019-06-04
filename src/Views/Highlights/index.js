import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

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

const Highlights = ({ property }) => (
  <Container>
    <Header>
      <Title>Destaques</Title>
    </Header>

    <RenderList
      data={property}
      renderItem={({ item }) => (
        <RenderItemList transaction={item.transation}>
          <HeaderItem>
            <ItemImage source={item.image} resizeMethod="resize" resizeMode="cover" />
            <TransactionBox transaction={item.transation}>
              <TransactionText>{item.transation}</TransactionText>
            </TransactionBox>
          </HeaderItem>
          <InfoBox>
            <GeneralInfo>
              <PriceText>{item.price}</PriceText>
              <PropertyInfo>
                <DetailItem>
                  <Text>Teste</Text>
                </DetailItem>

                <DetailItem>
                  <Text>Teste</Text>
                </DetailItem>

                <DetailItem>
                  <Text>Teste</Text>
                </DetailItem>
              </PropertyInfo>
            </GeneralInfo>
            <AddressInfo>
              <AddressText>{`${item.address}, ${item.number}`}</AddressText>
              <CityText>{`${item.neighborhood} - ${item.city}, ${item.state}`}</CityText>
            </AddressInfo>
          </InfoBox>
        </RenderItemList>
      )}
      keyExtractor={item => item.id}
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
