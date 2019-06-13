import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    zIndex: -1,
  },
});

export const Container = styled.FlatList.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '3.5%',
    paddingRight: '3.5%',
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 10px 0;
  background: ${colors.transparent};
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

export const ListItem = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  width: ${metrics.screenWidth * 0.9}px;
  height: 200px;
  background: ${colors.white};
  border-bottom-color: ${props => (props.transaction === 'vender' ? `${colors.primary}` : `${colors.secundary}`)};
  border-bottom-width: 3px;
  border-style: solid;
  margin: 0 ${metrics.screenWidth * 0.015}px;
  shadow-color: ${colors.darker};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.4;
  shadow-radius: 3;
  elevation: 5;
`;

export const HeaderItem = styled.View`
  flex: 1;
`;

export const ItemImage = styled.Image`
  flex: 1;
  width: 100%;
`;

export const TransactionBox = styled.View`
  padding: 10px 20px;
  background: ${props => (props.transaction === 'vender' ? `${colors.primary}` : `${colors.secundary}`)};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const TransactionText = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 500;
  text-transform: capitalize;
`;

export const InfoBox = styled.View`
  background: ${colors.white};
  padding: 2px 10px 5px;
`;

export const GeneralInfo = styled.View`
  flex-direction: row;
`;

export const PriceText = styled.Text`
  font-size: 28px;
  color: #353535;
  font-weight: 500;
`;

export const PropertyInfo = styled.View``;

export const AddressInfo = styled.View``;

export const AddressText = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
  color: #353535;
  font-weight: 500;
  margin-bottom: 2px;
`;

export const CityText = styled.Text`
  font-size: 14px;
  font-weight: 300;
  color: #353535;
`;
