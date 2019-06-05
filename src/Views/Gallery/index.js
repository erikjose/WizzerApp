import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Gallery from 'react-native-image-gallery';

class GalleryMain extends Component {
  state = {};

  handleItem = () => {};

  render() {
    const { navigation } = this.props;
    const property = navigation.getParam('property');
    console.tron.log(property);
    return (
      <View style={{ flex: 1 }}>
        {/* <Text>Galeria</Text>
        <Image style={{ width: 100, height: 100 }} source={property.image[0]} /> */}
        <Gallery
          style={{ backgroundColor: 'black', flex: 1 }}
          images={[
            {
              source: property.image[0],
              dimensions: { width: 150, height: 150 },
            },
          ]}
        />
      </View>
    );
  }
}

export default GalleryMain;
