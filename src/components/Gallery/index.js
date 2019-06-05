import React from 'react';

import { Image } from 'react-native';

import { Container, ButtonGallery } from './styles';

const Gallery = ({ property, navigation }) => (
  <Container>
    {property.image.map((image, index) => (
      <ButtonGallery key={index} onPress={() => navigation.navigate('GalleryMain', { property })}>
        <Image
          source={image}
          resizeMethod="resize"
          resizeMode="cover"
          style={{ width: '100%', height: 200, marginBottom: 5 }}
        />
      </ButtonGallery>
    ))}
  </Container>
);

export default Gallery;
