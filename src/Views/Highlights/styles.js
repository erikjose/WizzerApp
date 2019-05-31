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
  border-bottom-color: ${colors.regular};
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const RenderList = styled.FlatList`
  background-color: ${colors.white};
  flex: 1;
  padding: ${metrics.basePadding - 10}px;
`;

export const RenderItemList = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  height: 220px;
  width: 100%;
  background-color: ${colors.white};
  margin-bottom: ${metrics.baseMargin};
  border-bottom-color: ${colors.secundary};
  border-bottom-width: 2px;

  border-left-color: ${colors.light};
  border-left-width: ${StyleSheet.hairlineWidth}px;

  border-top-color: ${colors.light};
  border-top-width: ${StyleSheet.hairlineWidth}px;

  border-right-color: ${colors.light};
  border-right-width: ${StyleSheet.hairlineWidth}px;

  margin-bottom: ${metrics.baseMargin};
`;

export const HeaderItem = styled.View`
  flex: 1;
`;

export const ItemImage = styled.Image`
  width: 100%;
  flex: 1;
`;

export const TransactionBox = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 239, 173, 0.5);
  padding: 10px ${metrics.basePadding}px;
`;

export const TransactionText = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: bold;
  opacity: 1;
`;

export const InfoBox = styled.View`
  padding: ${metrics.basePadding - 15}px;
`;

export const GeneralInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PriceText = styled.Text`
  font-size: 28px;
  color: ${colors.darker};
  font-weight: 500;
  margin-bottom: 2px;
`;

export const PropertyInfo = styled.View`
  margin-left: ${metrics.baseMargin * 2}px;
`;

export const AddressInfo = styled.View``;

export const AddressText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 2px;
  color: ${colors.darker};
`;

export const CityText = styled.Text`
  font-size: 15px;
  font-weight: 300;
  color: ${colors.darker};
`;
