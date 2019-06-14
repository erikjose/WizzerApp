import React from 'react';
import { Text, Linking } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo from '~/assets/logo.png';

import {
  Container, Header, Logo, Content, SectionTitle, SectionItem, styles,
} from './styles';

// import { Container } from './styles';

const More = () => (
  <Container>
    <Header>
      <Logo source={logo} resizeMode="contain" resizeMethod="scale" />
    </Header>
    <Content>
      <SectionTitle>
        <Text style={styles.text}>Sobre o Wizzer</Text>
      </SectionTitle>
      <SectionItem onPress={() => Linking.openURL('https://www.wizzer.com.br/')}>
        <Text style={styles.text}>Termos de uso</Text>
      </SectionItem>
      <SectionItem onPress={() => Linking.openURL('https://www.wizzer.com.br/')}>
        <Text style={styles.text}>Política de privacidade</Text>
      </SectionItem>
      <SectionTitle> 
        <Text style={styles.text}>Sobre o aplicativo</Text>
      </SectionTitle>
      <SectionItem onPress={() => Linking.openURL('market://details?id=com.whatsapp')}>
        <Text style={styles.text}>Avalie este aplicativo</Text>
      </SectionItem>
      <SectionTitle>
        <Text style={styles.text}>Conta</Text>
      </SectionTitle>
      <SectionItem onPress={() => Linking.openURL('https://www.wizzer.com.br/')}>
        <Text style={styles.text}>Cadastre-se</Text>
      </SectionItem>
    </Content>
  </Container>
);

const TabIcon = ({ tintColor }) => <Icon name="dots-vertical" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

More.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default More;
