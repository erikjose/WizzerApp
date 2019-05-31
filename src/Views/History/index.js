import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container, Header, Title, RenderList, RenderItemList, RenderTitleList,
} from './styles';
import { styles } from '../Highlights/styles';

const History = () => (
  <Container>
    <Header>
      <Title>Buscas salvas</Title>
    </Header>
    <RenderList
      data={[{ key: 'Varginha' }, { key: 'Alfenas' }]}
      renderItem={({ item }) => (
        <RenderItemList>
          <TouchableOpacity>
            <RenderTitleList>{item.key}</RenderTitleList>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="close" size={16} style={styles.icon} />
          </TouchableOpacity>
        </RenderItemList>
      )}
    />
  </Container>
);

const TabIcon = ({ tintColor }) => (
  <Icon name="feature-search-outline" size={20} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

History.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default History;
