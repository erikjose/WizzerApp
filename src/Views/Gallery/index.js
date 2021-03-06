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
  title: 'Wizzer Imóveis',
  message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
  url: 'www.wizzer.com.br',
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
    const { navigation } = this.props;
    const property = navigation.getParam('property');
    let images = [];
    property.property.picture.forEach((element) => {
      const objImg = {
        source: { uri: `https://api.wizzer.com.br/storage/${element}` },
        dimensions: { height: 150 },
      };
      images = [...images, objImg];
    });

    this.setState({
      images,
    });
  };

  handlerShare = async (property) => {
    const url = `https://www.wizzer.com.br/anuncio/${property.advert_id}?query=${
      property.property.city
    }&transaction=comprar,alugar`;
    Share.share({
      title: 'Wizzer',
      message: url,
      url: 'www.wizzer.com.br',
      // subject: 'Subject',
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
          <DetailsText>{`${currentImage} de ${property.property.picture.length}`}</DetailsText>
          <ControllButton onPress={() => this.handlerShare(property)}> 
            <Icon name="share-outline" size={25} style={styles.share} />
          </ControllButton>
        </GalleryNav>
        <Gallery
          style={{ flex: 1, backgroundColor: 'black', width: '100%' }}
          images={images}
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
