import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

export const styles = StyleSheet.create({
  arrowReturn: {
    color: colors.white,
  },
  share: {
    color: colors.white,
  },
});

export const GalleryNav = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${colors.black};
  flex-direction: row;
  justify-content: space-between;
  padding: ${metrics.basePadding - 10}px;
  align-items: center;
  border-bottom-color: ${colors.white};
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-style: solid;
`;

export const DetailsText = styled.Text`
  color: ${colors.white};
  font-weight: 500;
  font-size: 15px;
`;

export const ControllButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})``;
