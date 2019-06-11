import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { metrics, colors } from '~/styles';

export const styles = StyleSheet.create({});

export const Container = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;
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

export const ContainerScroll = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
  padding: 10px;
`;

export const InfoAdvertiser = styled.View``;

export const TalkAdvertiser = styled.View``;

export const BoxTalk = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  border: ${StyleSheet.hairlineWidth}px solid ${colors.regular};
  padding: 0 5px;
  margin-bottom: 15px;
`;

export const TalkInput = styled.TextInput`
  flex: 1;
  padding: 0 5px;
`;

export const TextTalk = styled.Text`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 2px;
  color: ${colors.darker};
  margin-bottom: 20px;
`;
