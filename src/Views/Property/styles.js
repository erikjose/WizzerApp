import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { metrics, colors } from '~/styles';

export const styles = StyleSheet.create({
  arrowReturn: {
    color: colors.white,
    textShadowColor: colors.darker,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  share: {
    color: colors.white,
    textShadowColor: colors.darker,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  details: {
    height: '30%',
    zIndex: 2,
    position: 'absolute',
    top: '70%',
    left: 0,
    right: 0,
    backgroundColor: colors.white,
  },
});

export const Container = styled.View`
  flex: 1;
`;

export const ArrowTop = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  height: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HeaderNav = styled.View`
  flex-direction: row;
  position: absolute;
  padding: 10px;
  top: 0;
  left: 0;
  z-index: 2;
  justify-content: space-between;
  width: 100%;
`;

export const ControllButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;
