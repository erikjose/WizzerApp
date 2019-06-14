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
    console.tron.log('AQUI', property);
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
            <View style={styles.containerList}>
              <View style={styles.markers} />
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={styles.espTitle}>Tipo do Imóvel:</Text>
                {property.property.property_type.map((item, index) => {
                  switch (item) {
                    case 'apartment':
                      return <Text style={styles.espText}>Apartamento;</Text>;
                      break;
                    case 'house':
                      return <Text style={styles.espText}>Casa;</Text>;
                      break;
                    case 'condo':
                      return <Text style={styles.espText}>Casa de Condomínio;</Text>;
                      break;
                    case 'farmhouse':
                      return <Text style={styles.espText}>Chácara;</Text>;
                      break;
                    case 'flat':
                      return <Text style={styles.espText}>Flat;</Text>;
                      break;
                    case 'studio':
                      return <Text style={styles.espText}>Studio;</Text>;
                      break;
                    case 'land':
                      return <Text style={styles.espText}>Terreno;</Text>;
                      break;
                    case 'roof':
                      return <Text style={styles.espText}>Cobertura;</Text>;
                      break;
                    case 'warehouse':
                      return <Text style={styles.espText}>Armazém/Galpão;</Text>;
                      break;
                    case 'commercial_set':
                      return <Text style={styles.espText}>Conjunto Comercial;</Text>;
                      break;
                    case 'farm':
                      return <Text style={styles.espText}>Fazenda/Sítio;</Text>;
                      break;
                    case 'store':
                      return <Text style={styles.espText}>Loja;</Text>;
                      break;
                    case 'commercial_room':
                      return <Text style={styles.espText}>Sala Comercial;</Text>;
                      break;
                    case 'commercial_building':
                      return <Text style={styles.espText}>Prédio Comercial;</Text>;
                      break;
                    default:
                      break;
                  }
                })}
              </View>
            </View>
            {property.condo !== null && (
              <View style={styles.containerList}>
                <View style={styles.markers} />
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
            )}

            {property.property.complement !== null && (
              <View style={styles.containerList}>
                <View style={styles.markers} />
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.espTitle}>Complemento:</Text>
                  <Text style={styles.espText}>{property.property.complement}</Text>
                </View>
              </View>
            )}
            <View style={styles.containerList}>
              <View style={styles.markers} />
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.espTitle}>CEP:</Text>
                <Text style={styles.espText}>
                  {`${property.property.cep.slice(0, 5)}-${property.property.cep.slice(-3)}`}
                </Text>
              </View>
            </View>
            <View style={styles.containerList}>
              <View style={styles.markers} />
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.espTitle}>Dias no Wizzer:</Text>
                <Text style={styles.espText}>{property.days_on_wizzer}</Text>
              </View>
            </View>
          </ContentDescription>
        </ContainerScroll>
        <ContentButton>
          <ButtonProperty navigation={navigation} advert={property}>
            Falar com anunciante
          </ButtonProperty>
        </ContentButton>
      </View>
    );
  }
}

export default Details;
