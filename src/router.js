import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { colors } from '~/styles';

import Map from '~/Views/Map';
import Highlights from '~/Views/Highlights';
import History from '~/Views/History';
import More from '~/Views/More';

const Route = createAppContainer(
  createSwitchNavigator({
    Home: createBottomTabNavigator(
      {
        Home: Map,
        Destaques: Highlights,
        'Buscas salvas': History,
        Mais: More,
      },
      {
        tabBarOptions: {
          showIcon: true,
          showLabel: true,
          activeTintColor: colors.primary,
          inactiveTintColor: colors.regular,
          style: {
            padding: 5,
            height: 55,
            backgroundColor: colors.white,
          },
        },
      },
    ),
  }),
);

export default Route;
