import React from 'react';

import { Image } from 'react-native';

import { Container, ButtonGallery } from './styles';

const Gallery = ({ property, navigation }) => (
  <Container>
    {property.property.picture.map((image, index) => (
      <ButtonGallery
        key={property.advert_id}
        onPress={() => navigation.navigate('GalleryMain', { property, index })}
      >
        <Image
          source={{ uri: `https://api.wizzer.com.br/storage/${image}` }}
          resizeMethod="resize"
          resizeMode="cover"
          style={{ width: '100%', height: 200, marginBottom: 5 }}
        />
      </ButtonGallery>
    ))}
  </Container>
);

export default Gallery;
