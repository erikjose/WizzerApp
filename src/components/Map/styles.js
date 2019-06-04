import { StyleSheet } from 'react-native';
import styled from 'styled-components';

export const styles = StyleSheet.create({
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    zIndex: -5,
  },
});

export const Container = styled.View`
  flex: 1;
  z-index: -5;
`;
