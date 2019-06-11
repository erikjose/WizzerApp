import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import api from '~/services/api';
import { metrics, colors } from '~/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  styles,
  Container,
  Header,
  Logo,
  ContainerScroll,
  InfoAdvertiser,
  TalkAdvertiser,
  BoxTalk,
  TalkInput,
  TextTalk,
} from './styles';

import logo from '~/assets/logo.png';

class Talk extends Component {
  state = {
    name: null,
    email: null,
    phone: null,
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Container>
        <StatusBar hidden={false} />
        <Header>
          <Logo source={logo} resizeMode="contain" resizeMethod="scale" />
        </Header>
        <ContainerScroll>
          <InfoAdvertiser>
            <Text>Info</Text>
          </InfoAdvertiser>

          <TalkAdvertiser>
            <TextTalk>Falar com anunciante</TextTalk>
            <BoxTalk>
              <Icon name="account-outline" color={colors.regular} size={20} />
              <TalkInput placeholder="Nome" value={name} />
            </BoxTalk>

            <BoxTalk>
              <Icon name="email-open-outline" color={colors.regular} size={20} />
              <TalkInput placeholder="Email" value={email} />
            </BoxTalk>

            <BoxTalk>
              <Icon name="cellphone-sound" color={colors.regular} size={20} />
              <TalkInput placeholder="Telefone" value={phone} />
            </BoxTalk>
          </TalkAdvertiser>
        </ContainerScroll>
      </Container>
    );
  }
}

export default Talk;
