import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '~/styles';

export const styles = StyleSheet.create({
  backIcon: {
    color: colors.white,
    textShadowColor: colors.darker,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  shareIcon: {
    color: colors.white,
    textShadowColor: colors.darker,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
});

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  position: absolute;
  padding: 10px;
  top: 0;
  left: 0;
  z-index: 2;
  justify-content: space-between;
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;

export const ShareButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``;

export const DetailsBox = styled(Animated.View)`
  position: absolute;
  top: 70%;
  left: 0;
  right: 0;
  height: 30%;
  background: ${colors.white};
  z-index: 5;
`;

export const DetailsArrow = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  align-items: center;
  justify-content: center;
`;
