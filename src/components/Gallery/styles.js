import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { metrics, colors } from '~/styles';

export const styles = StyleSheet.create({});

export const Container = styled.ScrollView`
  background-color: ${colors.lighter};
`;

export const ButtonGallery = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})``;
