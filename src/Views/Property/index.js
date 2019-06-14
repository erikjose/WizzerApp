import React, { Component } from 'react';
import { Animated, Share } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import {
  styles,
  Container,
  Header,
  BackButton,
  ShareButton,
  DetailsBox,
  DetailsArrow,
} from './styles';

import Gallery from '~/components/Gallery';
import Details from '~/components/Details';

const shareOptions = {
  title: 'Wizzer Imóveis',
  message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
  url: 'www.wizzer.com.br',
  // subject: 'Subject',
};

class Property extends Component {
  state = { isUp: false };

  offset = 0;

  translateY = new Animated.Value(0);

  animatedEvent = Animated.event([{ nativeEvent: { translationY: this.translateY } }]);

  panAnimationHandler = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;

      this.offset += translationY;

      if (translationY < 0) {
        this.setState({ isUp: true });
      } else {
        this.setState({ isUp: false });
        this.translateY.setValue(this.offset);
        this.translateY.setOffset(0);
      }

      this.animationHandler();
    }
  };

  animationHandler = () => {
    const { isUp } = this.state;
    Animated.timing(this.translateY, { toValue: isUp ? -300 : 0, duration: 500 }).start(() => {
      this.offset = isUp ? -300 : 0;
      this.translateY.setOffset(this.offset);
      this.translateY.setValue(0);
    });
  };

  render() {
    const { isUp } = this.state;
    const { navigation } = this.props;
    const property = navigation.getParam('property');
    return (
      <Container>
        <Header>
          <BackButton onPress={() => navigation.pop()}>
            <Icon name="arrow-left" size={25} style={styles.backIcon} />
          </BackButton>
          <ShareButton onPress={() => Share.share(shareOptions)}>
            <Icon name="share-outline" size={25} style={styles.shareIcon} />
          </ShareButton>
        </Header>
        <Gallery property={property} navigation={navigation} />
        <PanGestureHandler
          onGestureEvent={this.animatedEvent}
          onHandlerStateChange={this.panAnimationHandler}
        >
          <DetailsBox
            style={{
              top: this.translateY.interpolate({
                inputRange: [-300, 0],
                outputRange: ['10%', '67%'],
                extrapolate: 'clamp',
              }),
              height: this.translateY.interpolate({
                inputRange: [-300, 0],
                outputRange: ['90%', '33%'],
                extrapolate: 'clamp',
              }),
            }}
          >
            <DetailsArrow
              onPress={() => {
                this.setState({ isUp: !isUp });
                this.animationHandler();
              }}
            >
              <Icon name="chevron-up" size={20} />
            </DetailsArrow>
            <Details property={property} navigation={navigation} />
          </DetailsBox>
        </PanGestureHandler>
      </Container>
    );
  }
}

export default Property;
