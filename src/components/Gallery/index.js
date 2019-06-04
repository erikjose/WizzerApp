import React from 'react';

import { Image } from 'react-native';

import { Container } from './styles';

const Gallery = ({ property }) => (
  <Container>
    {property.map((image, index) => (
      <Image
        source={image}
        resizeMethod="resize"
        resizeMode="cover"
        style={{ width: '100%', height: 200, marginBottom: 5 }}
        key={index}
      />
    ))}
  </Container>
);

export default Gallery;
