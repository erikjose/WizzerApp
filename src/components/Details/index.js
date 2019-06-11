import React, { Component } from 'react';
import Intl from 'intl';
import locale from 'intl/locale-data/jsonp/pt-BR';
import {
  StatusBar, Image, View, Text,
} from 'react-native';

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
    const { property, navigation } = this.props;
    return (
      <View style={[styles.container, { flex: 1 }]}>
        <StatusBar hidden />
        <ContainerScroll>
          <DetailsContainer>
            <DetailsPrice>
              {new Intl.NumberFormat(locale, {
                style: 'currency',
                currency: 'BRL',
              }).format(property.price)}
            </DetailsPrice>
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

            <DescriptionTitle style={{ marginTop: 15 }}>Especificações</DescriptionTitle>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  height: 15,
                  width: 15,
                  backgroundColor: '#DDD',
                  marginRight: 10,
                }}
              />
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={styles.espTitle}>Condomínio:</Text>
                <Text style={styles.espText}>
                  {new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(property.condo)}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  height: 15,
                  width: 15,
                  backgroundColor: '#DDD',
                  marginRight: 10,
                }}
              />
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.espTitle}>Complemento:</Text>
                <Text style={styles.espText}>das</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  height: 15,
                  width: 15,
                  backgroundColor: '#DDD',
                  marginRight: 10,
                }}
              />
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.espTitle}>CEP:</Text>
                <Text style={styles.espText}>das</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  height: 15,
                  width: 15,
                  backgroundColor: '#DDD',
                  marginRight: 10,
                }}
              />
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.espTitle}>Dias no Wizzer:</Text>
                <Text style={styles.espText}>das</Text>
              </View>
            </View>
          </ContentDescription>
        </ContainerScroll>
        <ContentButton>
          <ButtonProperty navigation={navigation}>Falar com anunciante</ButtonProperty>
        </ContentButton>
      </View>
    );
  }
}

export default Details;
