import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Map from '~/Views/Map';

const Route = createAppContainer(
  createSwitchNavigator({
    Map,
  }),
);

export default Route;
