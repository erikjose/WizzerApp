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
  background-color: ${colors.white};
  flex: 1;
`;

export const RenderItemList = styled.View`
  height: 55px;
  width: ${metrics.screenWidth};
  background-color: ${colors.lighter};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: ${metrics.basePadding - 10}px;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const RenderTitleList = styled.Text`
  font-weight: 400;
  font-size: 15px;
`;
