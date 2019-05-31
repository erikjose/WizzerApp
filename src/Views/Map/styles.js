import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const styles = StyleSheet.create({});

export const Container = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
  flex-direction: column-reverse;
`;
