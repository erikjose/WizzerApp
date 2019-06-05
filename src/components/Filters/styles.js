import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
  iconSell: {
    marginRight: 5,
    borderRadius: 7.5,
    width: 15,
    height: 15,
    backgroundColor: colors.primary,
  },
  iconRent: {
    marginRight: 5,
    borderRadius: 7.5,
    width: 15,
    height: 15,
    backgroundColor: colors.secundary,
  },
  transactionText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const Container = styled.View`
  width: 100%;
  height: 55px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const FilterItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex: 1;
  margin: 0 5px;
  height: 40px;
  border: ${StyleSheet.hairlineWidth}px solid ${colors.primary};
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: ${props => (props.selected ? colors.primary : colors.white)};
`;

export const FilterItemText = styled.Text`
  color: ${props => (props.selected ? colors.white : colors.primary)};
  font-size: 12px;
`;

export const FilterItemArrow = styled.View`
  width: 7px;
  height: 7px;
  background: #f9f9f9;
  position: absolute;
  border-top-width: ${StyleSheet.hairlineWidth};
  border-top-color: ${colors.regular};
  border-left-width: ${StyleSheet.hairlineWidth};
  border-left-color: ${colors.regular};
  transform: rotate(45deg);
  top: 43.5px;
  z-index: 10;
`;

export const FilterDropdown = styled.View`
  width: 100%;
  background: #f9f9f9;
  border-top-width: ${StyleSheet.hairlineWidth};
  border-top-color: ${colors.regular};
  position: absolute;
  top: 55px;
  left: 0px;
  z-index: 5;
`;

export const FilterDropdownContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 15,
  },
})`
  max-height: ${metrics.screenHeight - 220 - getStatusBarHeight()}px;
  padding-bottom: 15px;
`;

export const ContentTitleBox = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const ContentTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #353535;
`;

export const ContentSubtitle = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: #353535;
`;

export const ContentItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const ContentItemText = styled.Text`
  font-weight: 400;
  color: #353535;
  font-size: 16px;
`;

export const ContentItemControl = styled.View``;

export const FilterDropdownControls = styled.View`
  height: 55px;
  background: ${colors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const FilterCancelButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const CancelButtonText = styled.Text`
  color: ${colors.white};
  font-weight: 500;
  font-size: 14px;
`;

export const FilterConfirmButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  background: ${colors.white};
  height: 40px;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
`;

export const ConfirmButtonText = styled.Text`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 14px;
`;

export const CheckOption = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  border: 1px solid ${colors.primary};
  border-left-width: 0;
  justify-content: center;
  align-items: center;
  height: 30px;
  flex: 1;
  background: ${props => (props.selected ? colors.primary : 'transparent')};
`;

export const CheckOptionText = styled.Text`
  color: ${props => (props.selected ? colors.white : colors.primary)};
  font-size: 13px;
`;
