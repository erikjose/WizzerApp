import React from 'react';

import { ContainerButton, ButtonText } from './styles';

const ButtonProperty = props => (
  <ContainerButton onPress={() => props.navigation.navigate('Talk', { advert: props.advert })}>
    <ButtonText>{props.children}</ButtonText>
  </ContainerButton>
);

export default ButtonProperty;
