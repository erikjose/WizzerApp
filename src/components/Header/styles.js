import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '~/styles';

export const styles = StyleSheet.create({});

export const Container = styled.View`
  height: 55px;
  background: ${colors.white};
  padding: 7px 16px;
  justify-content: center;
  align-items: center;
  border-bottom-color: ${colors.regular};
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-style: solid;
`;

export const SearchBox = styled.View`
  width: 95%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  border: ${StyleSheet.hairlineWidth}px solid ${colors.regular};
  padding: 0 5px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  padding: 0 5px;
`;

export const SearchButton = styled.TouchableOpacity``;
