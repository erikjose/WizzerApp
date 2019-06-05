import React, { Component } from 'react';
import {
  View, Text, Image, Share,
} from 'react-native';
import Gallery from 'react-native-image-gallery';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  styles, GalleryNav, ControllButton, DetailsText,
} from './styles';

const shareOptions = {
  title: 'Title',
  message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
  url: 'www.example.com',
  subject: 'Subject',
};

class GalleryMain extends Component {
  state = {
    images: [],
    currentImage: null,
  };

  componentDidMount() {
    this.handleItem();
  }

  handleItem = () => {
    const property = this.props.navigation.getParam('property');
    let images = [];
    property.image.forEach((element) => {
      const objImg = { source: element, dimensions: { height: 150 } };
      images = [...images, objImg];
    });

    this.setState({
      images,
    });
  };

  render() {
    const { navigation } = this.props;
    const { images, currentImage } = this.state;
    const property = navigation.getParam('property');
    const initialImage = navigation.getParam('index');
    console.tron.log(initialImage);
    return (
      <View style={{ flex: 1 }}>
        <GalleryNav>
          <ControllButton onPress={() => navigation.pop()}>
            <Icon name="arrow-left" size={25} style={styles.arrowReturn} />
          </ControllButton>
          <DetailsText>{`${currentImage} de ${property.image.length}`}</DetailsText>
          <ControllButton onPress={() => Share.share(shareOptions)}>
            <Icon name="share-outline" size={25} style={styles.share} />
          </ControllButton>
        </GalleryNav>
        <Gallery
          style={{ flex: 1, backgroundColor: 'black', width: '100%' }}
          initialPage={initialImage}
          images={images}
          key={item => item.property.id}
          onPageScroll={(event) => {
            this.setState({
              currentImage: event.position + 1,
            });
          }}
        />
      </View>
    );
  }
}

export default GalleryMain;
