import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
} from './styles';

const Highlights = () => (
  <Container>
    <Header>
      <Title>Destaques</Title>
    </Header>

    <RenderList
      data={[
        {
          transation: 'Alugar',
          image: require('~/assets/placeholder.jpg'),
          price: 'R$ 750,00',
          address: 'Rua Juvenal Cardoso',
          number: 65,
          neighborhood: 'Belo Horizonte',
          cep: '37031-215',
          city: 'Varginha',
          state: 'MG',
        },
        {
          transation: 'Alugar',
          image: require('~/assets/placeholder.jpg'),
          price: 'R$ 750,00',
          address: 'Rua Juvenal Cardoso',
          number: 65,
          neighborhood: 'Belo Horizonte',
          cep: '37031-215',
          city: 'Varginha',
          state: 'MG',
        },
        {
          transation: 'Alugar',
          image: require('~/assets/placeholder.jpg'),
          price: 'R$ 750,00',
          address: 'Rua Juvenal Cardoso',
          number: 65,
          neighborhood: 'Belo Horizonte',
          cep: '37031-215',
          city: 'Varginha',
          state: 'MG',
        },
        {
          transation: 'Alugar',
          image: require('~/assets/placeholder.jpg'),
          price: 'R$ 750,00',
          address: 'Rua Juvenal Cardoso',
          number: 65,
          neighborhood: 'Belo Horizonte',
          cep: '37031-215',
          city: 'Varginha',
          state: 'MG',
        },
        {
          transation: 'Alugar',
          image: require('~/assets/placeholder.jpg'),
          price: 'R$ 750,00',
          address: 'Rua Juvenal Cardoso',
          number: 65,
          neighborhood: 'Belo Horizonte',
          cep: '37031-215',
          city: 'Varginha',
          state: 'MG',
        },
        {
          transation: 'Alugar',
          image: require('~/assets/placeholder.jpg'),
          price: 'R$ 750,00',
          address: 'Rua Juvenal Cardoso',
          number: 65,
          neighborhood: 'Belo Horizonte',
          cep: '37031-215',
          city: 'Varginha',
          state: 'MG',
        },
      ]}
      renderItem={({ item }) => (
        <RenderItemList>
          <HeaderItem>
            <ItemImage />
            <TransactionBox>
              <TransactionText>{item.transation}</TransactionText>
            </TransactionBox>
          </HeaderItem>
          <InfoBox>
            <GeneralInfo>
              <PriceText />

              <PropertyInfo />
            </GeneralInfo>

            <AddressInfo>
              <AddressText>
                {item.address}
,
                {item.number}
              </AddressText>
              <CityText>
                {item.neighborhood}
                {' '}
-
                {item.city}
,
                {item.state}
              </CityText>
            </AddressInfo>
          </InfoBox>
        </RenderItemList>
      )}
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

export default Highlights;
