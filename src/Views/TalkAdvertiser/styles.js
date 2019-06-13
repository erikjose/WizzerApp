import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { metrics, colors } from '~/styles';

export const styles = StyleSheet.create({
  textDanger: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: '300',
    marginBottom: 15,
  },
  success: {
    color: colors.sucess,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 15,
    textAlign: 'center',
  },
  backIcon: {
    color: colors.darker,
  },
});

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

export const InfoAdvertiser = styled.View`
  flex-direction: row;
  margin: 20px 0 30px;
  flex: 1;
  align-items: center;
`;

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

export const TalkArea = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  background: #f9f9f9;
  border: ${StyleSheet.hairlineWidth}px solid ${colors.regular};
  padding: 8px 5px;
  margin-bottom: 15px;
`;

export const TalkInputArea = styled.TextInput`
  height: 100px;
  width: 100%;
  padding: 0 5px;
`;

export const SubmitTalk = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  flex-direction: row;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  margin: 10px 0;
`;

export const SubmitText = styled.Text`
  color: ${colors.white};
  font-weight: 500;
  font-size: 18px;
`;

export const InfoView = styled.View`
  flex: 1;
`;

export const InfoViewPhoto = styled.View`
  margin-right: 10px;
`;

export const ImageProfile = styled.Image`
  height: 80;
  width: 80;
  padding: 5px;
`;

export const InfoName = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: ${colors.darker};
  margin-bottom: 2px;
`;

export const InfoDetails = styled.Text`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 2px;
  color: ${colors.darker};
`;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  position: absolute;
  top: 15px;
  left: 10px;
  z-index: 2;
`;
