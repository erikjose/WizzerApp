import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import { metrics, colors } from '~/styles';

export const styles = StyleSheet.create({
  image: {
    height: 15,
    width: 20,
    marginRight: 2,
  },
  container: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: colors.white,
  },
});

export const ContainerScroll = styled.ScrollView`
  flex: 1;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;

export const DetailsPrice = styled.Text`
  font-size: 28px;
  color: ${colors.darker};
  font-weight: 500;
`;

export const DetailsTransaction = styled.View`
  padding: ${metrics.basePadding - 10}px ${metrics.basePadding}px;
  background-color: ${props => (props.transaction === 'vender' ? `${colors.primary}` : `${colors.secundary}`)};
`;

export const DetailsTransactionText = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 500;
  text-transform: capitalize;
`;

export const Address = styled.View``;

export const AddressText = styled.Text`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 2px;
  color: ${colors.darker};
`;

export const CityText = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: ${colors.darker};
`;

export const Specification = styled.View`
  flex-direction: row;
`;

export const SpecificationItem = styled.View`
  padding: 5px 0;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

export const SpecificationText = styled.Text`
  font-size: 16px;
  color: ${colors.darker};
  font-weight: 300;
`;

export const ContentButton = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ContentDescription = styled.View``;

export const DescriptionTitle = styled.Text`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 2px;
  color: ${colors.darker};
`;

export const DescriptionText = styled.Text`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 2px;
  color: ${colors.darker};
`;
