import React, { Component } from 'react';
import { StatusBar, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  styles,
  DetailsContainer,
  DetailsPrice,
  DetailsTransaction,
  DetailsTransactionText,
  Address,
  AddressText,
  CityText,
  Specification,
  SpecificationItem,
  SpecificationText,
  ContentButton,
  ContainerScroll,
} from './styles';

import ButtonProperty from '~/components/ButtonProperty';

// Images
import bedroom from '~/assets/bedroom.jpg';
import bathroom from '~/assets/bathroom.jpg';
import parkingSpace from '~/assets/parkingSpace.jpg';
import area from '~/assets/area.jpg';

class Details extends Component {
  state = {};

  hendlerAnimate = () => {};

  render() {
    const { property } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ContainerScroll>
          <DetailsContainer>
            <DetailsPrice>{property.price}</DetailsPrice>
            <DetailsTransaction transaction={property.transation}>
              <DetailsTransactionText>{property.transation}</DetailsTransactionText>
            </DetailsTransaction>
          </DetailsContainer>
          <Specification>
            <SpecificationItem>
              <Image
                source={bedroom}
                resizeMethod="resize"
                resizeMode="contain"
                style={styles.image}
              />
              <SpecificationText>{property.specification.bedroom}</SpecificationText>
            </SpecificationItem>
            <SpecificationItem>
              <Image
                source={bathroom}
                resizeMethod="resize"
                resizeMode="contain"
                style={styles.image}
              />
              <SpecificationText>{property.specification.bathroom}</SpecificationText>
            </SpecificationItem>
            <SpecificationItem>
              <Image
                source={parkingSpace}
                resizeMethod="resize"
                resizeMode="contain"
                style={styles.image}
              />
              <SpecificationText>{property.specification.parkingSpace}</SpecificationText>
            </SpecificationItem>
            <SpecificationItem>
              <Image
                source={area}
                resizeMethod="resize"
                resizeMode="contain"
                style={styles.image}
              />
              <SpecificationText>
                {property.specification.area}
                m&sup2;
              </SpecificationText>
            </SpecificationItem>
          </Specification>
          <Address>
            <AddressText>{`${property.address}, ${property.number}`}</AddressText>
            <CityText>{`${property.neighborhood} - ${property.city}, ${property.state}`}</CityText>
          </Address>
          <ContentButton>
            <ButtonProperty>Falar com anunciante</ButtonProperty>
          </ContentButton>
        </ContainerScroll>
      </View>
    );
  }
}

export default Details;
