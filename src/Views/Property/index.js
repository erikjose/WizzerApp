import React, { Component } from 'react';
import { Animated } from 'react-native';
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

class Property extends Component {
  state = { isUp: false };

  offset = 0;

  translateY = new Animated.Value(0);

  panAnimationHandler = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;

      if (translationY < 0) {
        Animated.timing(this.translateY, { toValue: -300, duration: 500 }).start(() => {
          this.translateY.setOffset(-300);
          this.translateY.setValue(0);
        });
      } else {
        this.translateY.setValue(-300 + translationY);
        this.translateY.setOffset(0);
        Animated.timing(this.translateY, { toValue: 0, duration: 500 }).start(() => {
          this.translateY.setOffset(0);
          this.translateY.setValue(0);
        });
      }
    }
  };

  animationHandler = () => {
    const { isUp } = this.state;

    Animated.timing(this.translateY, { toValue: isUp ? -300 : 0, duration: 500 }).start(() => {
      // this.offset = isUp ? -300 : 0;
      // this.translateY.setOffset(this.offset);
      // this.translateY.setValue(0);
    });
  };

  render() {
    const { navigation } = this.props;
    const property = navigation.getParam('property');
    return (
      <Container>
        <Header>
          <BackButton>
            <Icon name="arrow-left" size={25} style={styles.backIcon} />
          </BackButton>
          <ShareButton>
            <Icon name="share-outline" size={25} style={styles.shareIcon} />
          </ShareButton>
        </Header>
        <Gallery property={property} navigation={navigation} />
        <PanGestureHandler
          onGestureEvent={Animated.event([{ nativeEvent: { translationY: this.translateY } }])}
          onHandlerStateChange={this.panAnimationHandler}
        >
          <DetailsBox
            style={{
              top: this.translateY.interpolate({
                inputRange: [-300, 0],
                outputRange: ['10%', '70%'],
                extrapolate: 'clamp',
              }),
              height: this.translateY.interpolate({
                inputRange: [-300, 0],
                outputRange: ['90%', '30%'],
                extrapolate: 'clamp',
              }),
            }}
          >
            <DetailsArrow onPress={this.animationHandler}>
              <Icon name="chevron-up" size={20} />
            </DetailsArrow>
            <Details property={property} />
          </DetailsBox>
        </PanGestureHandler>
      </Container>
    );
  }
}

export default Property;
