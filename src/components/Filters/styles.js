import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '~/styles';

export const styles = StyleSheet.create({});

export const Container = styled.View`
  height: 55px;
  background: ${colors.white};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const FilterItem = styled.TouchableOpacity`
  height: 40px;
  flex: 1;
  margin: 0 5px;
  justify-content: center;
  align-items: center;
  border: ${StyleSheet.hairlineWidth}px solid ${colors.primary};
`;

export const FilterItemTitle = styled.Text`
  font-size: 12px;
  color: ${colors.primary};
`;

export const FilterItemDropdown = styled.View`
  position: absolute;
  width: 100%;
  height: 300px;
  background: ${colors.secundary};
  top: 0;
  left: 0;
  z-index: 5;
`;
