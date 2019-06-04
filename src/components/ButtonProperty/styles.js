import styled from 'styled-components';
import { colors } from '~/styles';

export const ContainerButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  flex-direction: row;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  margin: 10px 0;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-weight: 500;
  font-size: 18px;
`;
