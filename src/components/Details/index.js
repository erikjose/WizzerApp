import React, { Component } from 'react';
import { StatusBar, Image, View } from 'react-native';

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
  ContentDescription,
  DescriptionTitle,
  DescriptionText,
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
      <View style={[styles.container, { flex: 1 }]}>
        <StatusBar hidden />
        <ContainerScroll>
          <DetailsContainer>
            <DetailsPrice>{property.price}</DetailsPrice>
            <DetailsTransaction transaction={property.transaction}>
              <DetailsTransactionText>{property.transaction}</DetailsTransactionText>
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
              <SpecificationText>{property.property.rooms}</SpecificationText>
            </SpecificationItem>
            <SpecificationItem>
              <Image
                source={bathroom}
                resizeMethod="resize"
                resizeMode="contain"
                style={styles.image}
              />
              <SpecificationText>{property.property.bathrooms}</SpecificationText>
            </SpecificationItem>
            <SpecificationItem>
              <Image
                source={parkingSpace}
                resizeMethod="resize"
                resizeMode="contain"
                style={styles.image}
              />
              <SpecificationText>{property.property.parking_spaces}</SpecificationText>
            </SpecificationItem>
            <SpecificationItem>
              <Image
                source={area}
                resizeMethod="resize"
                resizeMode="contain"
                style={styles.image}
              />
              <SpecificationText>
                {property.property.area}
                m&sup2;
              </SpecificationText>
            </SpecificationItem>
          </Specification>
          <Address>
            <AddressText>{`${property.property.street}, ${property.property.number}`}</AddressText>
            <CityText>
              {`${property.property.neighborhood} - ${property.property.city}, ${
                property.property.state
              }`}
            </CityText>
          </Address>
          <ContentDescription>
            <DescriptionTitle>Descrição do imóvel</DescriptionTitle>
            <DescriptionText>{property.property.description}</DescriptionText>
          </ContentDescription>
          <ContentButton>
            <ButtonProperty>Falar com anunciante</ButtonProperty>
          </ContentButton>
        </ContainerScroll>
      </View>
    );
  }
}

export default Details;
