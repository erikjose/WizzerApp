import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '~/styles';

export const styles = StyleSheet.create({});

export const Container = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
`;

export const Header = styled.View`
  height: 55px;
  width: ${metrics.screenWidth};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const RenderList = styled.FlatList`
  background-color: ${colors.lighter};
  flex: 1;
  padding: ${metrics.basePadding - 10}px;
`;

export const RenderItemList = styled.TouchableOpacity`
  height: 200px;
  width: ${metrics.screenWidth};
  background-color: ${colors.white};
  margin-bottom: ${metrics.baseMargin};
`;

export const HeaderItem = styled.View`
  flex: 1;
`;

export const ItemImage = styled.Image`
  width: 100%;
`;

export const TransactionBox = styled.View``;

export const TransactionText = styled.Text``;

export const InfoBox = styled.View``;

export const GeneralInfo = styled.View``;

export const PriceText = styled.Text``;

export const PropertyInfo = styled.View``;

export const AddressInfo = styled.View``;

export const AddressText = styled.Text``;

export const CityText = styled.Text``;
