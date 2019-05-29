import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '~/styles';

export const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: '#353535',
  },
});

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  height: 55px;
  border-bottom-color: ${colors.regular};
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-style: solid;
`;

export const Logo = styled.Image`
  height: 25px;
`;

export const Content = styled.ScrollView``;

export const SectionTitle = styled.View`
  background: ${colors.lighter};
  padding: 5px 15px;
`;

export const SectionItem = styled.TouchableOpacity`
  padding: 10px 15px;
`;
