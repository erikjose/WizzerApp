import React from 'react';
import { View, TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import Gallery from '~/components/Gallery';
import Details from '~/components/Details';

import {
  styles, Container, HeaderNav, ControllButton, ArrowTop,
} from './styles';

const Property = ({ navigation }) => {
  const property = navigation.getParam('property');
  const shareOptions = {
    title: 'Title',
    message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
    url: 'www.example.com',
    subject: 'Subject',
  };
  return (
    <Container>
      <HeaderNav>
        <ControllButton onPress={() => navigation.pop()}>
          <Icon name="arrow-left" size={25} style={styles.arrowReturn} />
        </ControllButton>
        <ControllButton onPress={() => Share.share(shareOptions)}>
          <Icon name="share-outline" size={25} style={styles.share} />
        </ControllButton>
      </HeaderNav>
      <View style={{ height: '70%' }}>
        <Gallery property={property.image} />
      </View>
      <View style={{ height: '30%' }}>
        <ArrowTop onPress={() => this.hendlerAnimate()}>
          <Icon name="chevron-up" size={20} style={styles.arrowTop} />
        </ArrowTop>
        <Details property={property} />
      </View>
    </Container>
  );
};

export default Property;
