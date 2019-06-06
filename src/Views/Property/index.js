import React, { Component } from 'react';
import {
  View, TouchableOpacity, Share, Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { metrics } from '~/styles';

// Components
import Gallery from '~/components/Gallery';
import Details from '~/components/Details';

import {
  styles, Container, HeaderNav, ControllButton, ArrowTop,
} from './styles';

const shareOptions = {
  title: 'Title',
  message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
  url: 'www.example.com',
  subject: 'Subject',
};

class Property extends Component {
  state = {
    positionY: new Animated.Value(70),
    isUp: false,
  };

  hendlerAnimate = () => {
    Animated.timing(this.state.positionY, {
      toValue: this.state.isUp ? 70 : 10,
      duration: 500,
    }).start();

    this.setState({ isUp: !this.state.isUp });
  };

  render() {
    const { navigation } = this.props;
    const { positionY, isUp } = this.state;
    const property = navigation.getParam('property');
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
        <View style={{ height: '70%', zIndex: 1 }}>
          <Gallery property={property} navigation={navigation} />
        </View>
        <Animated.View
          style={[
            styles.details,
            {
              top: positionY.interpolate({ inputRange: [10, 70], outputRange: ['10%', '70%'] }),
              height: positionY.interpolate({ inputRange: [10, 70], outputRange: ['90%', '30%'] }),
            },
          ]}
        >
          <ArrowTop onPress={() => this.hendlerAnimate()}>
            <Icon
              name="chevron-up"
              size={20}
              style={[styles.arrowTop, { transform: [{ rotate: isUp ? '180deg' : '0deg' }] }]}
            />
          </ArrowTop>
          <Details property={property} />
        </Animated.View>
      </Container>
    );
  }
}

export default Property;
