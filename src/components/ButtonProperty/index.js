import React from 'react';

import { ContainerButton, ButtonText } from './styles';

const ButtonProperty = props => (
  <ContainerButton>
    <ButtonText>{props.children}</ButtonText>
  </ContainerButton>
);

export default ButtonProperty;
