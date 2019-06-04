import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '~/styles';

export const styles = StyleSheet.create({});

export const Container = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
`;

// ${props => props.item ? }

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
  margin: ${metrics.baseMargin}px 0;
`;

export const RenderItemList = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  height: 220px;
  width: 100%;
  background-color: ${colors.white};
  margin-bottom: ${metrics.baseMargin};
  /* border-bottom-color: ${colors.secundary}; */
  border-bottom-color: ${props => (props.transaction === 'Comprar' ? `${colors.primary}` : `${colors.secundary}`)};
  border-bottom-width: 2px;

  shadow-color: ${colors.darker};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.4;
  shadow-radius: 3;
  elevation: 5;

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
  background: ${props => (props.transaction === 'Comprar' ? `${colors.primary}` : `${colors.secundary}`)};
  padding: 10px ${metrics.basePadding}px;
`;

// ${props => props.primary ? "white" : "palevioletred"};

export const TransactionText = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  font-weight: 500;
  opacity: 1;
`;

export const DetailItem = styled.View`
  flex-direction: row;
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
  flex-direction: row;
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
